# Venus Prime audit details
- Total Prize Pool: $36,500 USDC 
  - HM awards: $25,250 USDC 
  - Analysis awards: $1,000 USDC 
  - QA awards: $750 USDC 
  - Bot Race awards: $2,250 USDC 
  - Gas awards: $750 USDC 
  - Judge awards: $3,600 USDC 
  - Lookout awards: $2,400 USDC 
  - Scout awards: $500 USDC 
- Join [C4 Discord](https://discord.gg/code4rena) to register
- Submit findings [using the C4 form](https://code4rena.com/contests/2023-09-venus-prime/submit)
- [Read our guidelines for more details](https://docs.code4rena.com/roles/wardens)
- Starts September 28, 2023 20:00 UTC 
- Ends October 04, 2023 20:00 UTC 

## Automated Findings / Publicly Known Issues

Automated findings output for the audit can be found [here](https://github.com/code-423n4/2023-09-venus/blob/main/bot-report.md) within 24 hours of audit opening.

*Note for C4 wardens: Anything included in the automated findings output is considered a publicly known issue and is ineligible for awards.*

### Centralization related risks

Owners and admins will be the Normal timelock contract, that is part of the Governance protocol.

Regarding authorization, we'll use the `AccessControlManager` (ACM) deployed at https://bscscan.com/address/0x4788629abc6cfca10f9f969efdeaa1cf70c23555

In this ACM, only [0x939bd8d64c0a9583a7dcea9933f7b21697ab6396](https://bscscan.com/address/0x939bd8d64c0a9583a7dcea9933f7b21697ab6396) (Normal timelock) has the DEFAULT_ADMIN_ROLE. And this contract is a Timelock contract use during the Venus Improvement Proposals.

There are two other Timelock contracts to execute VIP's with a shorter delay:

* [Normal](https://bscscan.com/address/0x939bd8d64c0a9583a7dcea9933f7b21697ab6396): 24 hours voting + 48 hours delay
* [Fast-track](https://bscscan.com/address/0x555ba73dB1b006F3f2C7dB7126d6e4343aDBce02): 24 hours voting + 6 hours delay
* [Critical](https://bscscan.com/address/0x213c446ec11e45b15a6E29C1C1b402B8897f606d): 6 hours voting + 1 hour delay

### `calculateAPR()` Does Not Update Oracle

The function `_calculateUserAPR()` does not update the oracle for the input market or xvsToken. Thus the oracle will not update the pivot oracle price before calculating a users capital for their score.

We assume that prices will be updated often during other operations. It’s a view function, therefore, we consider the security risk to be lower. Finally, the update in the Resilient Oracle only affects the TWAP oracle, and the Resilient Oracle has mechanisms to revert the transaction if the data is too old

### Potential Locked Tokens

According to the logic of function `accrueInterest()`, it is possible that some rewards will not be collected by any user. If rewards are currently being issued, but no user has a positive score, then no user can collect these rewards. Even so, all currently unreleased funds issued can be sent from both `PrimeLiquidityProvider` and `ProtocolShareReserve` to the `Prime` contract by anyone. Since no user is privy to these funds, they will become stuck in the contract.

Prime tokens will be issued at the same time (same transaction) the Prime contracts are enabled, so the described scenario will not happen.

# Overview

Venus Protocol is excited to announce Venus Prime, a revolutionary incentive program aimed to bolster user engagement and growth within the protocol. An integral part of [Venus Tokenomics v3.1](https://docs-v4.venus.io/governance/tokenomics), Venus Prime aims to enhance rewards and promote $XVS staking, focusing on markets including USDT, USDC, BTC and ETH.

Venus Prime's uniqueness lies in its self-sustaining rewards system, instead of external sources, rewards are derived from the protocol's revenue, fostering a sustainable and ever-growing program.

Eligible $XVS holders will receive a unique, non-transferable Soulbound Token, which boosts rewards across selected markets.

Main contracts in the scope of the contest:

- [Prime](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol). Soulbound token that will allow holders to accrue rewards, generated with part of the income of some markets in the Venus Protocol. Regular users have to stake 1,000 XVS at least during 90 days to be eligible for a Prime token, that users will be able to claim as soon as they satisfy the constraint. After claiming their Prime token, the rewards start to be accrued and Prime holders will be able to claim them when they want.

- Libs [Scores](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol), [FixedMath](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol) and [FixedMath0x](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol). Used in the calculations needed to accrue rewards for Prime holders.

- [PrimeLiquidityProvider](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol). The second source of tokens for the Prime program (the first one are the Venus markets) will be this contract: `PrimeLiquidityProvider`. It will allow to define a fixed amount of tokens to be distributed uniformly to the Prime holders for a period of time.

- Integration with other contracts in the Venus Protocol:
  - In Comptroller (specifically in the [PolicyFacet](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Comptroller/Diamond/facets/PolicyFacet.sol)), after executing any operation that could impact the Prime score or interest, we accrue the interest and update the score for the prime user by calling `accrueInterestAndUpdateScore`.
  - In the [XVSVault](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/XVSVault/XVSVault.sol), after depositing or requesting a withdrawal, the function `xvsUpdated` is invoked, to review the requirements of Prime holders.
  - These specific integrations with the Prime contract are in the scope of the contest. But the rest of the features/functions in these contracts are not in the scope of this contest.

**Review [this document](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/README.md) for a more detailed and technical explanation of Venus Prime.**

## Links

- **Previous audits:**
  - [Peckshield (2023/August/26)](https://github.com/VenusProtocol/venus-protocol/blob/25f863877a8ef7731652a6209b23ca0c703060ba/audits/055_prime_peckshield_20230826.pdf)
  - [Fairyproof (2023/September/10)](https://github.com/VenusProtocol/venus-protocol/blob/25f863877a8ef7731652a6209b23ca0c703060ba/audits/056_prime_fairyproof_20230910.pdf)
- **Documentation:** https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/README.md
- **Website:** https://venus.io
- **Twitter:** https://twitter.com/VenusProtocol
- **Discord:** https://discord.gg/pTQ9EBHYtF

# Scope

| Contract | SLOC | Purpose | Libraries used |  
| ----------- | ----------- | ----------- | ----------- |
| [contracts/Tokens/Prime/Prime.sol](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol) | 581 | Souldbound token. **Main contract** of the feature. Prime holders will accrue rewards and they will be able to claim them when they want. | [@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol](https://www.openzeppelin.com/contracts) [@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol](https://www.openzeppelin.com/contracts) [@venusprotocol/isolated-pools/contracts/MaxLoopsLimitHelper.sol] (https://github.com/VenusProtocol/isolated-pools) [@venusprotocol/governance-contracts/contracts/Governance/AccessControlledV8.sol](https://github.com/VenusProtocol/governance-contracts/blob/main/contracts/Governance/AccessControlledV8.sol) [@venusprotocol/oracle/contracts/interfaces/OracleInterface.sol](https://github.com/VenusProtocol/oracle) |
| [contracts/Tokens/Prime/IPrime.sol](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/IPrime.sol) | 6 | Interface of the Prime contract | |
| [contracts/Tokens/Prime/PrimeStorage.sol](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol) | 55 | Storage variables of the Prime contract | [@venusprotocol/oracle/contracts/interfaces/OracleInterface.sol](https://github.com/VenusProtocol/oracle) |
| [contracts/Tokens/Prime/PrimeLiquidityProvider.sol](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol) | 166 | This contract provide liquidity to the Prime token, in an uniform way for a period of time. This liquidity is one of the two sources of funds supported by the Prime tokens. | [@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol](https://www.openzeppelin.com/contracts) [@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol](https://www.openzeppelin.com/contracts) [@venusprotocol/governance-contracts/contracts/Governance/AccessControlledV8.sol](https://github.com/VenusProtocol/governance-contracts/blob/main/contracts/Governance/AccessControlledV8.sol) |
| [contracts/Tokens/Prime/libs/Scores.sol](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol) | 24 | Library with the function `calculateScore`, used to calculate the score associated with a Prime holder, that will finally define the rewards allocated to the user | [@openzeppelin/contracts-upgradeable/utils/math/SafeCastUpgradeable.sol](https://www.openzeppelin.com/contracts)  |
| [contracts/Tokens/Prime/libs/FixedMath.sol](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol) | 26 | Library with mathematical operations | [@openzeppelin/contracts-upgradeable/utils/math/SafeCastUpgradeable.sol](https://www.openzeppelin.com/contracts)  |
| [contracts/Tokens/Prime/libs/FixedMath0x.sol](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol) | 181 | Library with mathematical operations | [@openzeppelin/contracts-upgradeable/utils/math/SafeCastUpgradeable.sol](https://www.openzeppelin.com/contracts)  |



## Out of scope

Anything not listed in the table above is out of scope, specifically:

- contracts/VRTVault/*
- contracts/PegStability/*
- contracts/test/*
- contracts/Oracle/PriceOracle.sol
- contracts/Swap/*
- contracts/InterestRateModels/*
- contracts/Utils/*
- contracts/XVSVault/*
- contracts/Lens/*
- contracts/Governance/*
- contracts/Comptroller/*
- contracts/DelegateBorrowers/SwapDebtDelegate.sol
- contracts/Tokens/EIP20NonStandardInterface.sol
- contracts/Tokens/BEP20Interface.sol
- contracts/Tokens/EIP20Interface.sol
- contracts/Tokens/VAI/*
- contracts/Tokens/VTokens/*
- contracts/Tokens/VRT/*
- contracts/Tokens/XVS/*
- contracts/Liquidator/*
- contracts/Vault/*


# Additional Context

Blockchains where this code will be deployed: BNB Chain, Ethereum mainnet, Arbitrum, Polygon zkEVM, opBNB.

## Scoping Details 
```
- If you have a public code repo, please share it here: https://github.com/VenusProtocol/venus-protocol/tree/sbt
- How many contracts are in scope?:   7
- Total SLoC for these contracts?:  1039
- How many external imports are there?: 7
- How many separate interfaces and struct definitions are there for the contracts within scope?:  10
- Does most of your code generally use composition or inheritance?:   Composition
- How many external calls?:   20
- What is the overall line coverage percentage provided by your tests?: 96%
- Is this an upgrade of an existing system?: True; Venus Prime is a new token claimable by users who satisfy some constraints in terms of XVS staked (we'll upgrade the XVSVault implementation) and interactions with the markets (we'll upgrade the Comptroller implementation of the Venus Core pool)
- Check all that apply (e.g. timelock, NFT, AMM, ERC20, rollups, etc.): Non ERC-20 Token
- Is there a need to understand a separate part of the codebase / get context in order to audit this part of the protocol?:  Yes 
- Please describe required context: ProtocolSharedReserve (PSR) contract (https://github.com/VenusProtocol/protocol-reserve/tree/develop/contracts/ProtocolReserve) is one of the contracts that will distribute funds to the Venus Prime tokens. Funds are sent to the PSR contract in an automatic way from the Venus markets, and part of these funds are sent to the Venus Prime tokens on demand. In Comptroller (specifically in the [PolicyFacet](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Comptroller/Diamond/facets/PolicyFacet.sol)), after executing any operation that could impact the Prime score or interest, we accrue the interest and update the score for the prime user by calling `accrueInterestAndUpdateScore`. In the [XVSVault](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/XVSVault/XVSVault.sol), after depositing or requesting a withdrawal, the function `xvsUpdated` is invoked, to review the requirements of Prime holders.
- Does it use an oracle?:  Yes; https://github.com/VenusProtocol/oracle - Under the hood this is an extra layer on top of Chainlink, Binance oracle, Pyth network and TWAP oracle, allowing the comparison of values returned to decide if they are valid or not
- Describe any novel or unique curve logic or mathematical models your code uses: Not novel, but the Venus Prime boosts yields based on the Cobb-Douglas function, inspired by the Goldfinch rewards mechanism
- Is this either a fork of or an alternate implementation of another project?:  False 
- Does it use a side-chain?: False
- Describe any specific areas you would like addressed: Please try to break the accounting (the rewards allocated to each user based on their behaviour)
```

# Tests

## Installation

To run venus, pull the repository from GitHub and install its dependencies. You will need [yarn](https://yarnpkg.com/lang/en/docs/install/) or [npm](https://docs.npmjs.com/cli/install) installed.

```

git clone https://github.com/code-423n4/2023-09-venus
cd 2023-09-venus
yarn install # or `npm install`

```

## Testing

Contract tests are defined under the [tests directory](https://github.com/code-423n4/2023-09-venus/tree/main/tests). To run the tests run:

```

yarn test # for the full repository

```

```

npx hardhat test tests/hardhat/Prime/*.ts tests/hardhat/integration/index.ts # only for the Prime contracts

```


- To run fork tests add `FORK_MAINNET=true` and `BSC_ARCHIVE_NODE_URL `in the `.env` file.
- To run the gas reporter, set the environment variable `REPORT_GAS=true`.

## Code Coverage

To run code coverage, run:

```

yarn coverage # for the full repository

```

```

npx hardhat coverage --testfiles "tests/hardhat/Prime/*.ts" # only for the Prime contracts

```

## Linting

To lint the code, run:

```

yarn lint

```

To format the code, run:

```

yarn prettier

```

