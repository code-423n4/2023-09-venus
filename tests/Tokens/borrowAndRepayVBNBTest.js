const { bnbGasCost, bnbUnsigned, bnbMantissa } = require("../Utils/BSC");

const {
  makeVToken,
  borrowSnapshot,
  totalBorrows,
  fastForward,
  pretendBorrow,
  setBNBBalance,
  getBalances,
  adjustBalances,
} = require("../Utils/Venus");

const BigNumber = require("bignumber.js");

const borrowAmount = bnbUnsigned(10e3);
const repayAmount = bnbUnsigned(10e2);

async function preBorrow(vToken, borrower, borrowAmount) {
  await send(vToken.comptroller, "setBorrowAllowed", [true]);
  await send(vToken.comptroller, "setBorrowVerify", [true]);
  await send(vToken.interestRateModel, "setFailBorrowRate", [false]);
  await send(vToken, "harnessSetFailTransferToAddress", [borrower, false]);
  await send(vToken, "harnessSetAccountBorrows", [borrower, 0, 0]);
  await send(vToken, "harnessSetTotalBorrows", [0]);
  await setBNBBalance(vToken, borrowAmount);
}

async function borrowFresh(vToken, borrower, borrowAmount) {
  return send(vToken, "harnessBorrowFresh", [borrower, borrowAmount], { from: borrower });
}

async function borrow(vToken, borrower, borrowAmount) {
  await send(vToken, "harnessFastForward", [1]);
  return send(vToken, "borrow", [borrowAmount], { from: borrower });
}

async function preRepay(vToken, benefactor, borrower, repayAmount) {
  // setup either benefactor OR borrower for success in repaying
  await send(vToken.comptroller, "setRepayBorrowAllowed", [true]);
  await send(vToken.comptroller, "setRepayBorrowVerify", [true]);
  await send(vToken.interestRateModel, "setFailBorrowRate", [false]);
  await pretendBorrow(vToken, borrower, 1, 1, repayAmount);
}

async function repayBorrowFresh(vToken, payer, borrower, repayAmount) {
  return send(vToken, "harnessRepayBorrowFresh", [payer, borrower, repayAmount], { from: payer, value: repayAmount });
}

async function repayBorrow(vToken, borrower, repayAmount) {
  await send(vToken, "harnessFastForward", [1]);
  return send(vToken, "repayBorrow", [], { from: borrower, value: repayAmount });
}

async function repayBorrowBehalf(vToken, payer, borrower, repayAmount) {
  await send(vToken, "harnessFastForward", [1]);
  return send(vToken, "repayBorrowBehalf", [borrower], { from: payer, value: repayAmount });
}

describe("VBNB", function () {
  let vToken, root, borrower, benefactor;
  beforeEach(async () => {
    [root, borrower, benefactor] = saddle.accounts;
    vToken = await makeVToken({ kind: "vbnb", comptrollerOpts: { kind: "bool" } });
  });

  describe("borrowFresh", () => {
    beforeEach(async () => await preBorrow(vToken, borrower, borrowAmount));

    it("fails if comptroller tells it to", async () => {
      await send(vToken.comptroller, "setBorrowAllowed", [false]);
      expect(await borrowFresh(vToken, borrower, borrowAmount)).toHaveTrollReject("BORROW_COMPTROLLER_REJECTION");
    });

    it("proceeds if comptroller tells it to", async () => {
      await expect(await borrowFresh(vToken, borrower, borrowAmount)).toSucceed();
    });

    it("fails if market not fresh", async () => {
      await fastForward(vToken);
      expect(await borrowFresh(vToken, borrower, borrowAmount)).toHaveTokenFailure(
        "MARKET_NOT_FRESH",
        "BORROW_FRESHNESS_CHECK",
      );
    });

    it("continues if fresh", async () => {
      await expect(await send(vToken, "accrueInterest")).toSucceed();
      await expect(await borrowFresh(vToken, borrower, borrowAmount)).toSucceed();
    });

    it("fails if protocol has less than borrowAmount of underlying", async () => {
      expect(await borrowFresh(vToken, borrower, borrowAmount.add(1))).toHaveTokenFailure(
        "TOKEN_INSUFFICIENT_CASH",
        "BORROW_CASH_NOT_AVAILABLE",
      );
    });

    it("fails if borrowBalanceStored fails (due to non-zero stored principal with zero account index)", async () => {
      await pretendBorrow(vToken, borrower, 0, 3e18, 5e18);
      expect(await borrowFresh(vToken, borrower, borrowAmount)).toHaveTokenFailure(
        "MATH_ERROR",
        "BORROW_ACCUMULATED_BALANCE_CALCULATION_FAILED",
      );
    });

    it("fails if calculating account new total borrow balance overflows", async () => {
      await pretendBorrow(
        vToken,
        borrower,
        1e-18,
        1e-18,
        "0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
      );
      expect(await borrowFresh(vToken, borrower, borrowAmount)).toHaveTokenFailure(
        "MATH_ERROR",
        "BORROW_NEW_ACCOUNT_BORROW_BALANCE_CALCULATION_FAILED",
      );
    });

    it("fails if calculation of new total borrow balance overflows", async () => {
      await send(vToken, "harnessSetTotalBorrows", [
        "0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
      ]);
      expect(await borrowFresh(vToken, borrower, borrowAmount)).toHaveTokenFailure(
        "MATH_ERROR",
        "BORROW_NEW_TOTAL_BALANCE_CALCULATION_FAILED",
      );
    });

    it("reverts if transfer out fails", async () => {
      await send(vToken, "harnessSetFailTransferToAddress", [borrower, true]);
      await expect(borrowFresh(vToken, borrower, borrowAmount)).rejects.toRevert("revert TOKEN_TRANSFER_OUT_FAILED");
    });

    it("reverts if borrowVerify fails", async () => {
      await send(vToken.comptroller, "setBorrowVerify", [false]);
      await expect(borrowFresh(vToken, borrower, borrowAmount)).rejects.toRevert("revert borrowVerify rejected borrow");
    });

    it("transfers the underlying cash, tokens, and emits Borrow event", async () => {
      const beforeBalances = await getBalances([vToken], [borrower]);
      const beforeProtocolBorrows = await totalBorrows(vToken);
      const result = await borrowFresh(vToken, borrower, borrowAmount);
      const afterBalances = await getBalances([vToken], [borrower]);
      expect(result).toSucceed();
      expect(afterBalances).toEqual(
        await adjustBalances(beforeBalances, [
          [vToken, "bnb", -borrowAmount],
          [vToken, "borrows", borrowAmount],
          [vToken, borrower, "bnb", borrowAmount.sub(await bnbGasCost(result))],
          [vToken, borrower, "borrows", borrowAmount],
        ]),
      );
      expect(result).toHaveLog("Borrow", {
        borrower: borrower,
        borrowAmount: borrowAmount.toString(),
        accountBorrows: borrowAmount.toString(),
        totalBorrows: beforeProtocolBorrows.add(borrowAmount).toString(),
      });
    });

    it("stores new borrow principal and interest index", async () => {
      const beforeProtocolBorrows = await totalBorrows(vToken);
      await pretendBorrow(vToken, borrower, 0, 3, 0);
      await borrowFresh(vToken, borrower, borrowAmount);
      const borrowSnap = await borrowSnapshot(vToken, borrower);
      expect(borrowSnap.principal).toEqualNumber(borrowAmount);
      expect(borrowSnap.interestIndex).toEqualNumber(bnbMantissa(3));
      expect(await totalBorrows(vToken)).toEqualNumber(beforeProtocolBorrows.add(borrowAmount));
    });
  });

  describe("borrow", () => {
    beforeEach(async () => await preBorrow(vToken, borrower, borrowAmount));

    it("emits a borrow failure if interest accrual fails", async () => {
      await send(vToken.interestRateModel, "setFailBorrowRate", [true]);
      await send(vToken, "harnessFastForward", [1]);
      await expect(borrow(vToken, borrower, borrowAmount)).rejects.toRevert("revert INTEREST_RATE_MODEL_ERROR");
    });

    it("returns error from borrowFresh without emitting any extra logs", async () => {
      expect(await borrow(vToken, borrower, borrowAmount.add(1))).toHaveTokenFailure(
        "TOKEN_INSUFFICIENT_CASH",
        "BORROW_CASH_NOT_AVAILABLE",
      );
    });

    it("returns success from borrowFresh and transfers the correct amount", async () => {
      const beforeBalances = await getBalances([vToken], [borrower]);
      await fastForward(vToken);
      const result = await borrow(vToken, borrower, borrowAmount);
      const afterBalances = await getBalances([vToken], [borrower]);
      expect(result).toSucceed();
      expect(afterBalances).toEqual(
        await adjustBalances(beforeBalances, [
          [vToken, "bnb", -borrowAmount],
          [vToken, "borrows", borrowAmount],
          [vToken, borrower, "bnb", borrowAmount.sub(await bnbGasCost(result))],
          [vToken, borrower, "borrows", borrowAmount],
        ]),
      );
    });
  });

  describe("repayBorrowFresh", () => {
    [true, false].forEach(async benefactorPaying => {
      let payer;
      const label = benefactorPaying ? "benefactor paying" : "borrower paying";
      describe(label, () => {
        beforeEach(async () => {
          payer = benefactorPaying ? benefactor : borrower;

          await preRepay(vToken, payer, borrower, repayAmount);
        });

        it("fails if repay is not allowed", async () => {
          await send(vToken.comptroller, "setRepayBorrowAllowed", [false]);
          expect(await repayBorrowFresh(vToken, payer, borrower, repayAmount)).toHaveTrollReject(
            "REPAY_BORROW_COMPTROLLER_REJECTION",
            "MATH_ERROR",
          );
        });

        it("fails if block number ≠ current block number", async () => {
          await fastForward(vToken);
          expect(await repayBorrowFresh(vToken, payer, borrower, repayAmount)).toHaveTokenFailure(
            "MARKET_NOT_FRESH",
            "REPAY_BORROW_FRESHNESS_CHECK",
          );
        });

        it("returns an error if calculating account new account borrow balance fails", async () => {
          await pretendBorrow(vToken, borrower, 1, 1, 1);
          await expect(repayBorrowFresh(vToken, payer, borrower, repayAmount)).rejects.toRevert(
            "revert REPAY_BORROW_NEW_ACCOUNT_BORROW_BALANCE_CALCULATION_FAILED",
          );
        });

        it("returns an error if calculation of new total borrow balance fails", async () => {
          await send(vToken, "harnessSetTotalBorrows", [1]);
          await expect(repayBorrowFresh(vToken, payer, borrower, repayAmount)).rejects.toRevert(
            "revert REPAY_BORROW_NEW_TOTAL_BALANCE_CALCULATION_FAILED",
          );
        });

        it("reverts if checkTransferIn fails", async () => {
          await expect(
            send(vToken, "harnessRepayBorrowFresh", [payer, borrower, repayAmount], { from: root, value: repayAmount }),
          ).rejects.toRevert("revert sender mismatch");
          await expect(
            send(vToken, "harnessRepayBorrowFresh", [payer, borrower, repayAmount], { from: payer, value: 1 }),
          ).rejects.toRevert("revert value mismatch");
        });

        it("reverts if repayBorrowVerify fails", async () => {
          await send(vToken.comptroller, "setRepayBorrowVerify", [false]);
          await expect(repayBorrowFresh(vToken, payer, borrower, repayAmount)).rejects.toRevert(
            "revert repayBorrowVerify rejected repayBorrow",
          );
        });

        it("transfers the underlying cash, and emits RepayBorrow event", async () => {
          const beforeBalances = await getBalances([vToken], [borrower]);
          const result = await repayBorrowFresh(vToken, payer, borrower, repayAmount);
          const afterBalances = await getBalances([vToken], [borrower]);
          expect(result).toSucceed();
          if (borrower == payer) {
            expect(afterBalances).toEqual(
              await adjustBalances(beforeBalances, [
                [vToken, "bnb", repayAmount],
                [vToken, "borrows", -repayAmount],
                [vToken, borrower, "borrows", -repayAmount],
                [vToken, borrower, "bnb", -repayAmount.add(await bnbGasCost(result))],
              ]),
            );
          } else {
            expect(afterBalances).toEqual(
              await adjustBalances(beforeBalances, [
                [vToken, "bnb", repayAmount],
                [vToken, "borrows", -repayAmount],
                [vToken, borrower, "borrows", -repayAmount],
              ]),
            );
          }
          expect(result).toHaveLog("RepayBorrow", {
            payer: payer,
            borrower: borrower,
            repayAmount: repayAmount.toString(),
            accountBorrows: "0",
            totalBorrows: "0",
          });
        });

        it("stores new borrow principal and interest index", async () => {
          const beforeProtocolBorrows = await totalBorrows(vToken);
          const beforeAccountBorrowSnap = await borrowSnapshot(vToken, borrower);
          expect(await repayBorrowFresh(vToken, payer, borrower, repayAmount)).toSucceed();
          const afterAccountBorrows = await borrowSnapshot(vToken, borrower);
          expect(afterAccountBorrows.principal).toEqualNumber(beforeAccountBorrowSnap.principal.sub(repayAmount));
          expect(afterAccountBorrows.interestIndex).toEqualNumber(bnbMantissa(1));
          expect(await totalBorrows(vToken)).toEqualNumber(beforeProtocolBorrows.sub(repayAmount));
        });
      });
    });
  });

  describe("repayBorrow", () => {
    beforeEach(async () => {
      await preRepay(vToken, borrower, borrower, repayAmount);
    });

    it("reverts if interest accrual fails", async () => {
      await send(vToken.interestRateModel, "setFailBorrowRate", [true]);
      await expect(repayBorrow(vToken, borrower, repayAmount)).rejects.toRevert("revert INTEREST_RATE_MODEL_ERROR");
    });

    it("reverts when repay borrow fresh fails", async () => {
      await send(vToken.comptroller, "setRepayBorrowAllowed", [false]);
      await expect(repayBorrow(vToken, borrower, repayAmount)).rejects.toRevertWithError(
        "COMPTROLLER_REJECTION",
        "revert repayBorrow failed",
      );
    });

    it("returns success from repayBorrowFresh and repays the right amount", async () => {
      await fastForward(vToken);
      const beforeAccountBorrowSnap = await borrowSnapshot(vToken, borrower);
      expect(await repayBorrow(vToken, borrower, repayAmount)).toSucceed();
      const afterAccountBorrowSnap = await borrowSnapshot(vToken, borrower);
      expect(afterAccountBorrowSnap.principal).toEqualNumber(beforeAccountBorrowSnap.principal.sub(repayAmount));
    });

    it("reverts if overpaying", async () => {
      const beforeAccountBorrowSnap = await borrowSnapshot(vToken, borrower);
      let tooMuch = new BigNumber(beforeAccountBorrowSnap.principal).plus(1);
      await expect(repayBorrow(vToken, borrower, tooMuch)).rejects.toRevert(
        "revert REPAY_BORROW_NEW_ACCOUNT_BORROW_BALANCE_CALCULATION_FAILED",
      );
      // await assert.toRevertWithError(repayBorrow(vToken, borrower, tooMuch), 'MATH_ERROR', "revert repayBorrow failed");
    });
  });

  describe("repayBorrowBehalf", () => {
    let payer;

    beforeEach(async () => {
      payer = benefactor;
      await preRepay(vToken, payer, borrower, repayAmount);
    });

    it("reverts if interest accrual fails", async () => {
      await send(vToken.interestRateModel, "setFailBorrowRate", [true]);
      await expect(repayBorrowBehalf(vToken, payer, borrower, repayAmount)).rejects.toRevert(
        "revert INTEREST_RATE_MODEL_ERROR",
      );
    });

    it("reverts from within repay borrow fresh", async () => {
      await send(vToken.comptroller, "setRepayBorrowAllowed", [false]);
      await expect(repayBorrowBehalf(vToken, payer, borrower, repayAmount)).rejects.toRevertWithError(
        "COMPTROLLER_REJECTION",
        "revert repayBorrowBehalf failed",
      );
    });

    it("returns success from repayBorrowFresh and repays the right amount", async () => {
      await fastForward(vToken);
      const beforeAccountBorrowSnap = await borrowSnapshot(vToken, borrower);
      expect(await repayBorrowBehalf(vToken, payer, borrower, repayAmount)).toSucceed();
      const afterAccountBorrowSnap = await borrowSnapshot(vToken, borrower);
      expect(afterAccountBorrowSnap.principal).toEqualNumber(beforeAccountBorrowSnap.principal.sub(repayAmount));
    });
  });
});
