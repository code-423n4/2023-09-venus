## Summary

### Medium Risk Issues

| |Issue|Instances|
|-|:-|:-:|
| [[M&#x2011;01](#m01-the-owner-is-a-single-point-of-failure-and-a-centralization-risk)] | The `owner` is a single point of failure and a centralization risk | 3 |

Total: 3 instances over 1 issues

### Low Risk Issues

| |Issue|Instances|
|-|:-|:-:|
| [[L&#x2011;01](#l01-code-does-not-follow-the-best-practice-of-check-effects-interaction)] | Code does not follow the best practice of check-effects-interaction | 2 |
| [[L&#x2011;02](#l02-missing-checks-for-address0-in-initializer)] | Missing checks for `address(0)` in initializer | 3 |
| [[L&#x2011;03](#l03-constructorinitialize-function-lacks-parameter-validation)] | `constructor`/`initialize` function lacks parameter validation | 3 |
| [[L&#x2011;04](#l04-external-calls-in-an-un-bounded-for-loop-may-result-in-a-dos)] | External calls in an un-bounded `for`-loop may result in a DOS | 12 |
| [[L&#x2011;05](#l05-initialization-can-be-front-run)] | Initialization can be front-run | 2 |
| [[L&#x2011;06](#l06-large-transfers-may-not-work-with-some-erc20-tokens)] | Large transfers may not work with some `ERC20` tokens | 3 |
| [[L&#x2011;07](#l07-multiplication-on-the-result-of-a-division)] | Multiplication on the result of a division | 3 |
| [[L&#x2011;08](#l08-loss-of-precision)] | Loss of precision | 45 |
| [[L&#x2011;09](#l09-upgradeable-contract-is-missing-a-__gap50-storage-variable-to-allow-for-new-storage-variables-in-later-versions)] | Upgradeable contract is missing a `__gap[50]` storage variable to allow for new storage variables in later versions | 1 |
| [[L&#x2011;10](#l10-state-variables-not-capped-at-reasonable-values)] | State variables not capped at reasonable values | 2 |
| [[L&#x2011;11](#l11-consider-implementing-two-step-procedure-for-updating-protocol-addresses)] | Consider implementing two-step procedure for updating protocol addresses | 1 |

Total: 77 instances over 11 issues

### Non-critical Issues

| |Issue|Instances|
|-|:-|:-:|
| [[N&#x2011;01](#n01-array-indices-should-be-referenced-via-enums-rather-than-via-numeric-literals)] | Array indices should be referenced via `enum`s rather than via numeric literals | 1 |
| [[N&#x2011;02](#n02-array-is-pushed-but-not-poped)] | Array is `push()`ed but not `pop()`ed | 1 |
| [[N&#x2011;03](#n03-consider-adding-a-blockdeny-list)] | Consider adding a block/deny-list | 2 |
| [[N&#x2011;04](#n04-state-variables-should-include-comments)] | State variables should include comments | 1 |
| [[N&#x2011;05](#n05-constants-in-comparisons-should-appear-on-the-left-side)] | Constants in comparisons should appear on the left side | 26 |
| [[N&#x2011;06](#n06-contracts-containing-only-utility-functions-should-be-made-into-libraries)] | Contracts containing only utility functions should be made into libraries | 1 |
| [[N&#x2011;07](#n07-custom-error-has-no-error-details)] | Custom error has no error details | 17 |
| [[N&#x2011;08](#n08-high-cyclomatic-complexity)] | High cyclomatic complexity | 2 |
| [[N&#x2011;09](#n09-consider-using-delete-rather-than-assigning-zerofalse-to-clear-values)] | Consider using `delete` rather than assigning zero/false to clear values | 12 |
| [[N&#x2011;10](#n10-constant-redefined-elsewhere)] | Constant redefined elsewhere | 1 |
| [[N&#x2011;11](#n11-events-should-use-parameters-to-convey-information)] | Events should use parameters to convey information | 2 |
| [[N&#x2011;12](#n12-enable-ir-based-code-generation)] | Enable IR-based code generation | 1 |
| [[N&#x2011;13](#n13-events-that-mark-critical-parameter-changes-should-contain-both-the-old-and-the-new-value)] | Events that mark critical parameter changes should contain both the old and the new value | 2 |
| [[N&#x2011;14](#n14-events-are-missing-sender-information)] | Events are missing sender information | 13 |
| [[N&#x2011;15](#n15-events-may-be-emitted-out-of-order-due-to-reentrancy)] | Events may be emitted out of order due to reentrancy | 3 |
| [[N&#x2011;16](#n16-use-of-floating-pragma)] | Use of floating pragma | 1 |
| [[N&#x2011;17](#n17-consider-adding-formal-verification-proofs)] | Consider adding formal verification proofs | 1 |
| [[N&#x2011;18](#n18-contracts-should-have-full-test-coverage)] | Contracts should have full test coverage | 1 |
| [[N&#x2011;19](#n19-contract-should-expose-an-interface)] | Contract should expose an `interface` | 26 |
| [[N&#x2011;20](#n20-large-or-complicated-code-bases-should-implement-invariant-tests)] | Large or complicated code bases should implement invariant tests | 1 |
| [[N&#x2011;21](#n21-variables-need-not-be-initialized-to-zero)] | Variables need not be initialized to zero | 10 |
| [[N&#x2011;22](#n22-invalid-natspec-comment-style)] | Invalid NatSpec comment style | 75 |
| [[N&#x2011;23](#n23-large-multiples-of-ten-should-use-scientific-notation-e.g.-1e6-rather-than-decimal-literals-e.g.-1000000-for-readability)] | Large multiples of ten should use scientific notation (e.g. 1e6) rather than decimal literals (e.g. `1000000`), for readability | 3 |
| [[N&#x2011;24](#n24-large-numeric-literals-should-use-underscores-for-readability.)] | Large numeric literals should use underscores for readability. | 2 |
| [[N&#x2011;25](#n25-use-the-latest-solidity-prior-to-0.8.20-if-on-l2s-for-deployment)] | Use the latest solidity (prior to 0.8.20 if on L2s) for deployment | 7 |
| [[N&#x2011;26](#n26-contract-does-not-follow-the-solidity-style-guide's-suggested-layout-ordering)] | Contract does not follow the Solidity style guide's suggested layout ordering | 1 |
| [[N&#x2011;27](#n27-file-is-missing-natspec)] | File is missing NatSpec | 1 |
| [[N&#x2011;28](#n28-multiple-addressid-mappings-can-be-combined-into-a-single-mapping-of-an-addressid-to-a-struct-for-readability)] | Multiple `address`/ID mappings can be combined into a single `mapping` of an `address`/ID to a `struct`, for readability | 2 |
| [[N&#x2011;29](#n29-not-using-the-named-return-variables-anywhere-in-the-function-is-confusing)] | Not using the named return variables anywhere in the function is confusing | 7 |
| [[N&#x2011;30](#n30-natspec:-function-declarations-should-have-descriptions)] | NatSpec: Function declarations should have descriptions | 3 |
| [[N&#x2011;31](#n31-natspec:-contract-declarations-should-have-@author-annotations)] | NatSpec: Contract declarations should have `@author` annotations | 7 |
| [[N&#x2011;32](#n32-natspec:-contract-declarations-should-have-descriptions)] | NatSpec: Contract declarations should have descriptions | 7 |
| [[N&#x2011;33](#n33-natspec:-state-variable-declarations-should-have-descriptions)] | NatSpec: State variable declarations should have descriptions | 1 |
| [[N&#x2011;34](#n34-natspec:-contract-declarations-should-have-@title-annotations)] | NatSpec: Contract declarations should have `@title` annotations | 7 |
| [[N&#x2011;35](#n35-else-block-not-required)] | `else`-block not required | 3 |
| [[N&#x2011;36](#n36-numeric-values-having-to-do-with-time-should-use-time-units-for-readability)] | Numeric values having to do with time should use time units for readability | 1 |
| [[N&#x2011;37](#n37-polymorphic-functions-make-security-audits-more-time-consuming-and-error-prone)] | Polymorphic functions make security audits more time-consuming and error-prone | 1 |
| [[N&#x2011;38](#n38-setters-should-prevent-re-setting-of-the-same-value)] | Setters should prevent re-setting of the same value | 6 |
| [[N&#x2011;39](#n39-redundant-return-statement-in-a-function-with-named-return-variables)] | Redundant return statement in a function with named return variables | 1 |
| [[N&#x2011;40](#n40-missing-checks-for-state-variable-assignments)] | Missing checks for state variable assignments | 5 |
| [[N&#x2011;41](#n41-long-functions-should-be-refactored-into-multiple-smaller-functions)] | Long functions should be refactored into multiple, smaller, functions | 2 |
| [[N&#x2011;42](#n42-lines-are-too-long)] | Lines are too long | 11 |
| [[N&#x2011;43](#n43-top-level-declarations-should-be-separated-by-at-least-two-lines)] | Top-level declarations should be separated by at least two lines | 1 |
| [[N&#x2011;44](#n44-typos)] | Typos | 7 |
| [[N&#x2011;45](#n45-consider-bounding-input-array-length)] | Consider bounding input array length | 6 |
| [[N&#x2011;46](#n46-non-externalpublic-function-names-should-begin-with-an-underscore)] | Non-`external`/`public` function names should begin with an underscore | 9 |
| [[N&#x2011;47](#n47-non-externalpublic-variable-names-should-begin-with-an-underscore)] | Non-`external`/`public` variable names should begin with an underscore | 4 |
| [[N&#x2011;48](#n48-event-is-not-properly-indexed)] | Event is not properly `indexed` | 1 |
| [[N&#x2011;49](#n49-unused-event-definition)] | Unused `event` definition | 3 |
| [[N&#x2011;50](#n50-constants-should-be-defined-rather-than-using-magic-numbers)] | `constant`s should be defined rather than using magic numbers | 91 |
| [[N&#x2011;51](#n51-consider-using-named-mappings)] | Consider using named mappings | 11 |
| [[N&#x2011;52](#n52-vulnerable-versions-of-packages-are-being-used)] | Vulnerable versions of packages are being used | 3 |

Total: 414 instances over 52 issues

### Gas Optimizations

Gas totals use lower bounds of ranges and count two iterations of each `for`-loop. All values above are runtime, not deployment, values; deployment values are listed in the individual issue descriptions. The table above as well as its gas numbers do not include any of the excluded findings.

| |Issue|Instances|Total Gas Saved|
|-|:-|:-:|:-:|
| [[G&#x2011;01](#g01-use-assembly-to-check-for-address0)] | Use assembly to check for `address(0)` | 10 | 60 |
| [[G&#x2011;02](#g02-use-assembly-to-emit-events-in-order-to-save-gas)] | Use assembly to emit events, in order to save gas | 15 | 570 |
| [[G&#x2011;03](#g03-use-assembly-to-write-addresscontract-type-storage-values)] | Use assembly to write address/contract type storage values | 9 | 450 |
| [[G&#x2011;04](#g04-use-assembly-to-check-zero)] | Use assembly to check zero | 25 | 150 |
| [[G&#x2011;05](#g05-avoid-updating-storage-when-the-value-hasn't-changed)] | Avoid updating storage when the value hasn't changed | 1 | 800 |
| [[G&#x2011;06](#g06-state-variables-should-be-cached-in-stack-variables-rather-than-re-reading-them-from-storage)] | State variables should be cached in stack variables rather than re-reading them from storage | 29 | 2813 |
| [[G&#x2011;07](#g07-use-calldata-instead-of-memory-for-immutable-arguments)] | Use `calldata` instead of `memory` for immutable arguments | 1 | 300 |
| [[G&#x2011;08](#g08-avoid-contract-existence-checks-by-using-low-level-calls)] | Avoid contract existence checks by using low level calls | 36 | 3600 |
| [[G&#x2011;09](#g09-events-should-be-emitted-outside-of-loops)] | Events should be emitted outside of loops | 1 | 375 |
| [[G&#x2011;10](#g10-the-result-of-function-calls-should-be-cached-rather-than-re-calling-the-function)] | The result of function calls should be cached rather than re-calling the function | 7 | 700 |
| [[G&#x2011;11](#g11-operator-greaterless-costs-less-gas-than-operator-greaterless)] | Operator `>=`/`<=` costs less gas than operator `>`/`<` | 43 | 129 |
| [[G&#x2011;12](#g12-internalprivate-functions-only-called-once-can-be-inlined-to-save-gas)] | `internal`/`private` functions only called once can be inlined to save gas | 6 | 180 |
| [[G&#x2011;13](#g13-lessarraygreater.length-should-not-be-looked-up-in-every-loop-of-a-for-loop)] | `<array>.length` should not be looked up in every loop of a `for`-loop | 10 | 30 |
| [[G&#x2011;14](#g14-using-bool-for-storage-incurs-overhead)] | Using `bool` for storage incurs overhead | 1 | 17100 |
| [[G&#x2011;15](#g15-multiple-accesses-of-the-same-mappingarray-keyindex-should-be-cached)] | Multiple accesses of the same mapping/array key/index should be cached | 39 | 1638 |
| [[G&#x2011;16](#g16-multiple-addressid-mappings-can-be-combined-into-a-single-mapping-of-an-addressid-to-a-struct-where-appropriate)] | Multiple `address`/ID mappings can be combined into a single `mapping` of an `address`/ID to a `struct`, where appropriate | 10 | - |
| [[G&#x2011;17](#g17-nesting-if-statements-is-cheaper-than-using-andand)] | Nesting `if`-statements is cheaper than using `&&` | 7 | 42 |
| [[G&#x2011;18](#g18-reduce-gas-usage-by-moving-to-solidity-0.8.19-or-later)] | Reduce gas usage by moving to Solidity 0.8.19 or later | 7 | - |
| [[G&#x2011;19](#g19-constructors-can-be-marked-payable)] | Constructors can be marked `payable` | 2 | 42 |
| [[G&#x2011;20](#g20-lessxgreater-+-lessygreater-costs-more-gas-than-lessxgreater-lessxgreater-+-lessygreater-for-state-variables)] | `<x> += <y>` costs more gas than `<x> = <x> + <y>` for state variables | 2 | 226 |
| [[G&#x2011;21](#g21-using-private-rather-than-public-for-constants-saves-gas)] | Using `private` rather than `public` for constants, saves gas | 4 | 13600 |
| [[G&#x2011;22](#g22-use-a-more-recent-version-of-solidity)] | Use a more recent version of solidity | 1 | - |
| [[G&#x2011;23](#g23-simple-checks-for-zero-can-be-done-using-assembly-to-save-gas)] | Simple checks for zero can be done using assembly to save gas | 20 | 120 |
| [[G&#x2011;24](#g24-redundant-state-variable-getters)] | Redundant state variable getters | 1 | - |
| [[G&#x2011;25](#g25-unchecked-can-be-used-on-the-division-of-two-uints-in-order-to-save-gas)] | `unchecked {}`  can be used on the division of two `uint`s in order to save gas | 20 | 400 |
| [[G&#x2011;26](#g26-add-unchecked-for-subtractions-where-the-operands-cannot-underflow-because-of-a-previous-require-or-if-statement)] | Add `unchecked {}` for subtractions where the operands cannot underflow because of a previous `require()` or `if`-statement | 23 | 1955 |
| [[G&#x2011;27](#g27-usage-of-intsuints-smaller-than-32-bytes-incurs-overhead)] | Usage of `int`s/`uint`s smaller than 32 bytes incurs overhead | 12 | 660 |
| [[G&#x2011;28](#g28-remove-or-replace-unused-state-variables)] | Remove or replace unused state variables | 30 | - |
| [[G&#x2011;29](#g29-internal-functions-not-called-by-the-contract-should-be-removed-to-save-deployment-gas)] | `internal` functions not called by the contract should be removed to save deployment gas | 8 | - |
| [[G&#x2011;30](#g30-consider-activating-via-ir-for-deploying)] | Consider activating via-ir for deploying | 7 | - |
| [[G&#x2011;31](#g31-use-!-0-or-0-for-unsigned-integer-comparison)] | Use `!= 0` or `== 0` for unsigned integer comparison | 11 | 44 |

Total: 398 instances over 31 issues with **45984 gas** saved

## Medium Risk Issues

### [M&#x2011;01] The `owner` is a single point of failure and a centralization risk
Having a single EOA as the only owner of contracts is a large centralization risk and a single point of failure. A single private key may be taken in a hack, or the sole holder of the key may become unable to retrieve the key when necessary. Consider changing to a multi-signature setup, or having a role-based authorization model.

*There are 3 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

118         function initializeTokens(address[] calldata tokens_) external onlyOwner {

177         function setPrimeToken(address prime_) external onlyOwner {

216         function sweepToken(IERC20Upgradeable token_, address to_, uint256 amount_) external onlyOwner {

```
*GitHub*: [[118](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L118-L118), [177](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L177-L177), [216](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L216-L216)]




## Low Risk Issues

### [L&#x2011;01] Code does not follow the best practice of check-effects-interaction
Code should follow the best-practice of [check-effects-interaction](https://blockchain-academy.hs-mittweida.de/courses/solidity-coding-beginners-to-intermediate/lessons/solidity-11-coding-patterns/topic/checks-effects-interactions/), where state variables are updated before any external calls are made. Doing so prevents a large class of reentrancy bugs.

*There are 2 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

// @audit _primeLiquidityProvider.accrueTokens() is called before these state variables are updated
580             unreleasedPSRIncome[underlying] = totalIncomeUnreleased;
581             unreleasedPLPIncome[underlying] = totalAccruedInPLP;
...
588             markets[vToken].rewardIndex = markets[vToken].rewardIndex + delta;

// @audit IProtocolShareReserve().releaseFunds() is called before this state variable is updated
// @audit IPrimeLiquidityProvider().releaseFunds()) is called before this state variable is updated
688                     unreleasedPLPIncome[underlying] = 0;

```
*GitHub*: [[580](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L580-L588), [688](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L688-L688)]



### [L&#x2011;02] Missing checks for `address(0)` in initializer

*There are 3 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

// @audit _accessControlManager not checked
130         function initialize(
131             address _xvsVault,
132             address _xvsVaultRewardToken,
133             uint256 _xvsVaultPoolId,
134             uint128 _alphaNumerator,
135             uint128 _alphaDenominator,
136             address _accessControlManager,
137             address _protocolShareReserve,
138             address _primeLiquidityProvider,
139             address _comptroller,
140             address _oracle,
141             uint256 _loopsLimit
142         ) external virtual initializer {

```
*GitHub*: [[136](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L136-L136)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

// @audit accessControlManager_ not checked
// @audit tokens_ not checked
90        function initialize(
91            address accessControlManager_,
92            address[] calldata tokens_,
93            uint256[] calldata distributionSpeeds_
94        ) external initializer {

// @audit accessControlManager_ not checked
// @audit tokens_ not checked
90        function initialize(
91            address accessControlManager_,
92            address[] calldata tokens_,
93            uint256[] calldata distributionSpeeds_
94        ) external initializer {

```
*GitHub*: [[91](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L91-L91), [92](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L92-L92)]



### [L&#x2011;03] `constructor`/`initialize` function lacks parameter validation
Constructors and initialization functions play a critical role in contracts by setting important initial states when the contract is first deployed before the system starts. The parameters passed to the constructor and initialization functions directly affect the behavior of the contract / protocol. If incorrect parameters are provided, the system may fail to run, behave abnormally, be unstable, or lack security. Therefore, it's crucial to carefully check each parameter in the constructor and initialization functions. If an exception is found, the transaction should be rolled back.

*There are 3 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

// @audit _xvsVaultPoolId not checked
// @audit _alphaNumerator not checked
// @audit _loopsLimit not checked
130         function initialize(
131             address _xvsVault,
132             address _xvsVaultRewardToken,
133             uint256 _xvsVaultPoolId,
134             uint128 _alphaNumerator,
135             uint128 _alphaDenominator,
136             address _accessControlManager,
137             address _protocolShareReserve,
138             address _primeLiquidityProvider,
139             address _comptroller,
140             address _oracle,
141             uint256 _loopsLimit
142         ) external virtual initializer {

// @audit _xvsVaultPoolId not checked
// @audit _alphaNumerator not checked
// @audit _loopsLimit not checked
130         function initialize(
131             address _xvsVault,
132             address _xvsVaultRewardToken,
133             uint256 _xvsVaultPoolId,
134             uint128 _alphaNumerator,
135             uint128 _alphaDenominator,
136             address _accessControlManager,
137             address _protocolShareReserve,
138             address _primeLiquidityProvider,
139             address _comptroller,
140             address _oracle,
141             uint256 _loopsLimit
142         ) external virtual initializer {

// @audit _xvsVaultPoolId not checked
// @audit _alphaNumerator not checked
// @audit _loopsLimit not checked
130         function initialize(
131             address _xvsVault,
132             address _xvsVaultRewardToken,
133             uint256 _xvsVaultPoolId,
134             uint128 _alphaNumerator,
135             uint128 _alphaDenominator,
136             address _accessControlManager,
137             address _protocolShareReserve,
138             address _primeLiquidityProvider,
139             address _comptroller,
140             address _oracle,
141             uint256 _loopsLimit
142         ) external virtual initializer {

```
*GitHub*: [[133](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L133-L133), [134](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L134-L134), [141](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L141-L141)]



### [L&#x2011;04] External calls in an un-bounded `for`-loop may result in a DOS
Consider limiting the number of iterations in `for`-loops that make external calls.

*There are 12 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

// @audit external call => IVToken(vToken).underlying()
// @audit external call => IProtocolShareReserve(protocolShareReserve).getUnreleasedFunds(comptroller, IProtocolShareReserve.Schema.SPREAD_PRIME_CORE, address(this), underlying)
// @audit external call => _primeLiquidityProvider.accrueTokens(underlying)
// @audit external call => _primeLiquidityProvider.tokenAmountAccrued(underlying)
// @audit external call => IXVSVault(xvsVault).getUserInfo(xvsVaultRewardToken, xvsVaultPoolId, user)
// @audit external call => vToken.borrowBalanceStored(user)
// @audit external call => vToken.exchangeRateStored()
// @audit external call => vToken.balanceOf(user)
// @audit external call => IXVSVault(xvsVault).xvsAddress()
// @audit external call => oracle.updateAssetPrice(xvsToken)
// @audit external call => oracle.updatePrice(market)
// @audit external call => oracle.getPrice(xvsToken)
// @audit external call => oracle.getUnderlyingPrice(market)
// @audit external call => vToken.decimals()
204             for (uint256 i = 0; i < users.length; ) {
205                 address user = users[i];
206     
207                 if (!tokens[user].exists) revert UserHasNoPrimeToken();
208                 if (isScoreUpdated[nextScoreUpdateRoundId][user]) continue;
209     
210                 address[] storage _allMarkets = allMarkets;
211                 for (uint256 j = 0; j < _allMarkets.length; ) {
212                     address market = _allMarkets[j];
213                     _executeBoost(user, market);
214                     _updateScore(user, market);
215     
216                     unchecked {
217                         j++;
218                     }
219                 }
220     
221                 pendingScoreUpdates--;
222                 isScoreUpdated[nextScoreUpdateRoundId][user] = true;
223     
224                 unchecked {
225                     i++;
226                 }
227     
228                 emit UserScoreUpdated(user);
229             }

// @audit external call => IVToken(vToken).underlying()
// @audit external call => IProtocolShareReserve(protocolShareReserve).getUnreleasedFunds(comptroller, IProtocolShareReserve.Schema.SPREAD_PRIME_CORE, address(this), underlying)
// @audit external call => _primeLiquidityProvider.accrueTokens(underlying)
// @audit external call => _primeLiquidityProvider.tokenAmountAccrued(underlying)
// @audit external call => IXVSVault(xvsVault).getUserInfo(xvsVaultRewardToken, xvsVaultPoolId, user)
// @audit external call => vToken.borrowBalanceStored(user)
// @audit external call => vToken.exchangeRateStored()
// @audit external call => vToken.balanceOf(user)
// @audit external call => IXVSVault(xvsVault).xvsAddress()
// @audit external call => oracle.updateAssetPrice(xvsToken)
// @audit external call => oracle.updatePrice(market)
// @audit external call => oracle.getPrice(xvsToken)
// @audit external call => oracle.getUnderlyingPrice(market)
// @audit external call => vToken.decimals()
211                 for (uint256 j = 0; j < _allMarkets.length; ) {
212                     address market = _allMarkets[j];
213                     _executeBoost(user, market);
214                     _updateScore(user, market);
215     
216                     unchecked {
217                         j++;
218                     }
219                 }

// @audit external call => IVToken(vToken).underlying()
// @audit external call => IProtocolShareReserve(protocolShareReserve).getUnreleasedFunds(comptroller, IProtocolShareReserve.Schema.SPREAD_PRIME_CORE, address(this), underlying)
// @audit external call => _primeLiquidityProvider.accrueTokens(underlying)
// @audit external call => _primeLiquidityProvider.tokenAmountAccrued(underlying)
246             for (uint256 i = 0; i < allMarkets.length; ) {
247                 accrueInterest(allMarkets[i]);
248     
249                 unchecked {
250                     i++;
251                 }
252             }

// @audit external call => IVToken(vToken).underlying()
// @audit external call => IProtocolShareReserve(protocolShareReserve).getUnreleasedFunds(comptroller, IProtocolShareReserve.Schema.SPREAD_PRIME_CORE, address(this), underlying)
// @audit external call => _primeLiquidityProvider.accrueTokens(underlying)
// @audit external call => _primeLiquidityProvider.tokenAmountAccrued(underlying)
// @audit external call => IXVSVault(xvsVault).getUserInfo(xvsVaultRewardToken, xvsVaultPoolId, user)
// @audit external call => vToken.borrowBalanceStored(user)
// @audit external call => vToken.exchangeRateStored()
// @audit external call => vToken.balanceOf(user)
// @audit external call => IXVSVault(xvsVault).xvsAddress()
// @audit external call => oracle.updateAssetPrice(xvsToken)
// @audit external call => oracle.updatePrice(market)
// @audit external call => oracle.getPrice(xvsToken)
// @audit external call => oracle.getUnderlyingPrice(market)
// @audit external call => vToken.decimals()
335                 for (uint256 i = 0; i < users.length; ) {
336                     Token storage userToken = tokens[users[i]];
337                     if (userToken.exists && !userToken.isIrrevocable) {
338                         _upgrade(users[i]);
339                     } else {
340                         _mint(true, users[i]);
341                         _initializeMarkets(users[i]);
342                     }
343     
344                     unchecked {
345                         i++;
346                     }
347                 }

// @audit external call => IVToken(vToken).underlying()
// @audit external call => IProtocolShareReserve(protocolShareReserve).getUnreleasedFunds(comptroller, IProtocolShareReserve.Schema.SPREAD_PRIME_CORE, address(this), underlying)
// @audit external call => _primeLiquidityProvider.accrueTokens(underlying)
// @audit external call => _primeLiquidityProvider.tokenAmountAccrued(underlying)
// @audit external call => IXVSVault(xvsVault).getUserInfo(xvsVaultRewardToken, xvsVaultPoolId, user)
// @audit external call => vToken.borrowBalanceStored(user)
// @audit external call => vToken.exchangeRateStored()
// @audit external call => vToken.balanceOf(user)
// @audit external call => IXVSVault(xvsVault).xvsAddress()
// @audit external call => oracle.updateAssetPrice(xvsToken)
// @audit external call => oracle.updatePrice(market)
// @audit external call => oracle.getPrice(xvsToken)
// @audit external call => oracle.getUnderlyingPrice(market)
// @audit external call => vToken.decimals()
349                 for (uint256 i = 0; i < users.length; ) {
350                     _mint(false, users[i]);
351                     _initializeMarkets(users[i]);
352                     delete stakedAt[users[i]];
353     
354                     unchecked {
355                         i++;
356                     }
357                 }

// @audit external call => IVToken(vToken).underlying()
// @audit external call => IProtocolShareReserve(protocolShareReserve).getUnreleasedFunds(comptroller, IProtocolShareReserve.Schema.SPREAD_PRIME_CORE, address(this), underlying)
// @audit external call => _primeLiquidityProvider.accrueTokens(underlying)
// @audit external call => _primeLiquidityProvider.tokenAmountAccrued(underlying)
// @audit external call => IXVSVault(xvsVault).getUserInfo(xvsVaultRewardToken, xvsVaultPoolId, user)
// @audit external call => vToken.borrowBalanceStored(user)
// @audit external call => vToken.exchangeRateStored()
// @audit external call => vToken.balanceOf(user)
// @audit external call => IXVSVault(xvsVault).xvsAddress()
// @audit external call => oracle.updateAssetPrice(xvsToken)
// @audit external call => oracle.updatePrice(market)
// @audit external call => oracle.getPrice(xvsToken)
// @audit external call => oracle.getUnderlyingPrice(market)
// @audit external call => vToken.decimals()
609             for (uint256 i = 0; i < _allMarkets.length; ) {
610                 _executeBoost(user, _allMarkets[i]);
611                 _updateScore(user, _allMarkets[i]);
612     
613                 unchecked {
614                     i++;
615                 }
616             }

// @audit external call => IVToken(vToken).underlying()
// @audit external call => IProtocolShareReserve(protocolShareReserve).getUnreleasedFunds(comptroller, IProtocolShareReserve.Schema.SPREAD_PRIME_CORE, address(this), underlying)
// @audit external call => _primeLiquidityProvider.accrueTokens(underlying)
// @audit external call => _primeLiquidityProvider.tokenAmountAccrued(underlying)
// @audit external call => IXVSVault(xvsVault).getUserInfo(xvsVaultRewardToken, xvsVaultPoolId, user)
// @audit external call => vToken.borrowBalanceStored(user)
// @audit external call => vToken.exchangeRateStored()
// @audit external call => vToken.balanceOf(user)
// @audit external call => IXVSVault(xvsVault).xvsAddress()
// @audit external call => oracle.updateAssetPrice(xvsToken)
// @audit external call => oracle.updatePrice(market)
// @audit external call => oracle.getPrice(xvsToken)
// @audit external call => oracle.getUnderlyingPrice(market)
// @audit external call => vToken.decimals()
625             for (uint256 i = 0; i < _allMarkets.length; ) {
626                 address market = _allMarkets[i];
627                 accrueInterest(market);
628     
629                 interests[market][account].rewardIndex = markets[market].rewardIndex;
630     
631                 uint256 score = _calculateScore(market, account);
632                 interests[market][account].score = score;
633                 markets[market].sumOfMembersScore = markets[market].sumOfMembersScore + score;
634     
635                 unchecked {
636                     i++;
637                 }
638             }

// @audit external call => IVToken(vToken).underlying()
// @audit external call => IProtocolShareReserve(protocolShareReserve).getUnreleasedFunds(comptroller, IProtocolShareReserve.Schema.SPREAD_PRIME_CORE, address(this), underlying)
// @audit external call => _primeLiquidityProvider.accrueTokens(underlying)
// @audit external call => _primeLiquidityProvider.tokenAmountAccrued(underlying)
730             for (uint256 i = 0; i < _allMarkets.length; ) {
731                 _executeBoost(user, _allMarkets[i]);
732     
733                 markets[_allMarkets[i]].sumOfMembersScore =
734                     markets[_allMarkets[i]].sumOfMembersScore -
735                     interests[_allMarkets[i]][user].score;
736                 interests[_allMarkets[i]][user].score = 0;
737                 interests[_allMarkets[i]][user].rewardIndex = 0;
738     
739                 unchecked {
740                     i++;
741                 }
742             }

```
*GitHub*: [[204](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L204-L229), [204](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L204-L229), [211](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L211-L219), [211](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L211-L219), [246](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L246-L252), [335](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L335-L347), [349](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L349-L357), [609](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L609-L616), [609](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L609-L616), [625](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L625-L638), [625](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L625-L638), [730](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L730-L742)]



### [L&#x2011;05] Initialization can be front-run
The `initialize()` functions below are not called by another contract atomically after the contract is deployed, so it's possible for a malicious user to call `initialize()` which, if it's noticed in time, would require the project to re-deploy the contract in order to properly initialize. Consider creating a factory contract, which will `new` and `initialize()` each contract atomically.

*There are 2 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

130         function initialize(
131             address _xvsVault,
132             address _xvsVaultRewardToken,
133             uint256 _xvsVaultPoolId,
134             uint128 _alphaNumerator,
135             uint128 _alphaDenominator,
136             address _accessControlManager,
137             address _protocolShareReserve,
138             address _primeLiquidityProvider,
139             address _comptroller,
140             address _oracle,
141             uint256 _loopsLimit
142         ) external virtual initializer {

```
*GitHub*: [[130](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L130-L142)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

90        function initialize(
91            address accessControlManager_,
92            address[] calldata tokens_,
93            uint256[] calldata distributionSpeeds_
94        ) external initializer {

```
*GitHub*: [[90](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L90-L94)]



### [L&#x2011;06] Large transfers may not work with some `ERC20` tokens
Some `IERC20` implementations (e.g `UNI`, `COMP`) may fail if the valued `transferred` is larger than `uint96`. [Source](https://github.com/d-xo/weird-erc20/blob/main/src/Uint96.sol).

*There are 3 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

692             asset.safeTransfer(user, amount);

```
*GitHub*: [[692](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L692-L692)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

204             IERC20Upgradeable(token_).safeTransfer(prime, accruedAmount);

224             token_.safeTransfer(to_, amount_);

```
*GitHub*: [[204](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L204-L204), [224](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L224-L224)]



### [L&#x2011;07] Multiplication on the result of a division
Dividing an integer by another integer will often result in loss of precision. When the result is multiplied by another number, the loss of precision is magnified, often to material magnitudes. `(X / Z) * Y` should be re-written as `(X * Y) / Z`

*There are 3 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

881             uint256 borrowCapUSD = (xvsPrice * ((xvs * markets[market].borrowMultiplier) / EXP_SCALE)) / EXP_SCALE;

882             uint256 supplyCapUSD = (xvsPrice * ((xvs * markets[market].supplyMultiplier) / EXP_SCALE)) / EXP_SCALE;

949             return ((((market.totalBorrows() * market.borrowRatePerBlock()) / EXP_SCALE) * market.reserveFactorMantissa()) /

```
*GitHub*: [[881](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L881-L881), [882](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L882-L882), [949](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L949-L949)]



### [L&#x2011;08] Loss of precision
Division by large numbers may result in the result being zero, due to solidity not supporting fractions. Consider requiring a minimum amount for the numerator to ensure that it is always larger than the denominator

*There are 45 instances of this issue:*

<details>

<summary>see instances</summary>

```solidity
File: contracts/Tokens/Prime/Prime.sol

501             uint256 supply = (exchangeRate * balanceOfAccount) / EXP_SCALE;

585                 delta = ((distributionIncome * EXP_SCALE) / markets[vToken].sumOfMembersScore);

654             uint256 supply = (exchangeRate * balanceOfAccount) / EXP_SCALE;

881             uint256 borrowCapUSD = (xvsPrice * ((xvs * markets[market].borrowMultiplier) / EXP_SCALE)) / EXP_SCALE;

882             uint256 supplyCapUSD = (xvsPrice * ((xvs * markets[market].supplyMultiplier) / EXP_SCALE)) / EXP_SCALE;

885             uint256 supplyUSD = (tokenPrice * supply) / EXP_SCALE;

886             uint256 borrowUSD = (tokenPrice * borrow) / EXP_SCALE;

889                 supply = supplyUSD > 0 ? (supply * supplyCapUSD) / supplyUSD : 0;

893                 borrow = borrowUSD > 0 ? (borrow * borrowCapUSD) / borrowUSD : 0;

922             return (index * score) / EXP_SCALE;

949             return ((((market.totalBorrows() * market.borrowRatePerBlock()) / EXP_SCALE) * market.reserveFactorMantissa()) /
950                 EXP_SCALE);

1004              uint256 userYearlyIncome = (userScore * _incomeDistributionYearly(vToken)) / totalScore;

1009              uint256 userSupplyIncomeYearly = (userYearlyIncome * totalCappedSupply) / totalCappedValue;

1010              uint256 userBorrowIncomeYearly = (userYearlyIncome * totalCappedBorrow) / totalCappedValue;

1012              supplyAPR = totalSupply == 0 ? 0 : ((userSupplyIncomeYearly * MAXIMUM_BPS) / totalSupply);

1013              borrowAPR = totalBorrow == 0 ? 0 : ((userBorrowIncomeYearly * MAXIMUM_BPS) / totalBorrow);

```
*GitHub*: [[501](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L501-L501), [585](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L585-L585), [654](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L654-L654), [881](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L881-L881), [882](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L882-L882), [885](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L885-L885), [886](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L886-L886), [889](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L889-L889), [893](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L893-L893), [922](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L922-L922), [949](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L949-L950), [949](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L949-L949), [1004](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L1004-L1004), [1009](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L1009-L1009), [1010](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L1010-L1010), [1012](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L1012-L1012), [1013](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L1013-L1013)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath.sol

25            return (n.toInt256() * FixedMath0x.FIXED_1) / int256(d.toInt256());

37            return uint256((u.toInt256() * FixedMath0x.FIXED_1) / f);

```
*GitHub*: [[25](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol#L25-L25), [37](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol#L37-L37)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath0x.sol

75                x = (x * FIXED_1) / int256(0x00000000000000000000000000000000000000000001c8464f76164760000000); // / e ^ -32

80                x = (x * FIXED_1) / int256(0x00000000000000000000000000000000000000f1aaddd7742e90000000000000); // / e ^ -16

85                x = (x * FIXED_1) / int256(0x00000000000000000000000000000000000afe10820813d78000000000000000); // / e ^ -8

90                x = (x * FIXED_1) / int256(0x0000000000000000000000000000000002582ab704279ec00000000000000000); // / e ^ -4

95                x = (x * FIXED_1) / int256(0x000000000000000000000000000000001152aaa3bf81cc000000000000000000); // / e ^ -2

100                 x = (x * FIXED_1) / int256(0x000000000000000000000000000000002f16ac6c59de70000000000000000000); // / e ^ -1

105                 x = (x * FIXED_1) / int256(0x000000000000000000000000000000004da2cbf1be5828000000000000000000); // / e ^ -0.5

110                 x = (x * FIXED_1) / int256(0x0000000000000000000000000000000063afbe7ab2082c000000000000000000); // / e ^ -0.25

115                 x = (x * FIXED_1) / int256(0x0000000000000000000000000000000070f5a893b608861e1f58934f97aea57d); // / e ^ -0.125

122             r += (z * (0x100000000000000000000000000000000 - y)) / 0x100000000000000000000000000000000;

126             r += (z * (0x099999999999999999999999999999999 - y)) / 0x300000000000000000000000000000000;

128             r += (z * (0x092492492492492492492492492492492 - y)) / 0x400000000000000000000000000000000;

130             r += (z * (0x08e38e38e38e38e38e38e38e38e38e38e - y)) / 0x500000000000000000000000000000000;

132             r += (z * (0x08ba2e8ba2e8ba2e8ba2e8ba2e8ba2e8b - y)) / 0x600000000000000000000000000000000;

134             r += (z * (0x089d89d89d89d89d89d89d89d89d89d89 - y)) / 0x700000000000000000000000000000000;

136             r += (z * (0x088888888888888888888888888888888 - y)) / 0x800000000000000000000000000000000; // add y^15 / 15 - y^16 / 16

201             r = r / 0x21c3677c82b40000 + y + FIXED_1; // divide by 20! and then add y^1 / 1! + y^0 / 0!

208                     (r * int256(0x00000000000000000000000000000000000000f1aaddd7742e56d32fb9f99744)) /
209                     int256(0x0000000000000000000000000043cbaf42a000812488fc5c220ad7b97bf6e99e); // * e ^ -32

214                     (r * int256(0x00000000000000000000000000000000000afe10820813d65dfe6a33c07f738f)) /
215                     int256(0x000000000000000000000000000005d27a9f51c31b7c2f8038212a0574779991); // * e ^ -16

220                     (r * int256(0x0000000000000000000000000000000002582ab704279e8efd15e0265855c47a)) /
221                     int256(0x0000000000000000000000000000001b4c902e273a58678d6d3bfdb93db96d02); // * e ^ -8

226                     (r * int256(0x000000000000000000000000000000001152aaa3bf81cb9fdb76eae12d029571)) /
227                     int256(0x00000000000000000000000000000003b1cc971a9bb5b9867477440d6d157750); // * e ^ -4

232                     (r * int256(0x000000000000000000000000000000002f16ac6c59de6f8d5d6f63c1482a7c86)) /
233                     int256(0x000000000000000000000000000000015bf0a8b1457695355fb8ac404e7a79e3); // * e ^ -2

238                     (r * int256(0x000000000000000000000000000000004da2cbf1be5827f9eb3ad1aa9866ebb3)) /
239                     int256(0x00000000000000000000000000000000d3094c70f034de4b96ff7d5b6f99fcd8); // * e ^ -1

244                     (r * int256(0x0000000000000000000000000000000063afbe7ab2082ba1a0ae5e4eb1b479dc)) /
245                     int256(0x00000000000000000000000000000000a45af1e1f40c333b3de1db4dd55f29a7); // * e ^ -0.5

250                     (r * int256(0x0000000000000000000000000000000070f5a893b608861e1f58934f97aea57d)) /
251                     int256(0x00000000000000000000000000000000910b022db7ae67ce76b441c27035c6a1); // * e ^ -0.25

256                     (r * int256(0x00000000000000000000000000000000783eafef1c0a8f3978c7f81824d62ebf)) /
257                     int256(0x0000000000000000000000000000000088415abbe9a76bead8d00cf112e4d4a8); // * e ^ -0.125

```
*GitHub*: [[75](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L75-L75), [80](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L80-L80), [85](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L85-L85), [90](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L90-L90), [95](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L95-L95), [100](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L100-L100), [105](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L105-L105), [110](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L110-L110), [115](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L115-L115), [122](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L122-L122), [126](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L126-L126), [128](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L128-L128), [130](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L130-L130), [132](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L132-L132), [134](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L134-L134), [136](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L136-L136), [201](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L201-L201), [208](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L208-L209), [214](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L214-L215), [220](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L220-L221), [226](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L226-L227), [232](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L232-L233), [238](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L238-L239), [244](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L244-L245), [250](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L250-L251), [256](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L256-L257)]


</details>


### [L&#x2011;09] Upgradeable contract is missing a `__gap[50]` storage variable to allow for new storage variables in later versions
See [this](https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps) link for a description of this storage variable. While some contracts may not currently be sub-classed, adding the variable now protects against forgetting to add it in the future.

*There is one instance of this issue:*
```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

8   contract PrimeLiquidityProvider is AccessControlledV8, PausableUpgradeable {

```
*GitHub*: [[8](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L8-L8)]



### [L&#x2011;10] State variables not capped at reasonable values
Consider adding minimum/maximum value checks to ensure that the state variables below can never be used to excessively harm users, including via griefing

*There are 2 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

154             xvsVaultPoolId = _xvsVaultPoolId;

821             pendingScoreUpdates = totalScoreUpdatesRequired;

```
*GitHub*: [[154](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L154-L154), [821](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L821-L821)]



### [L&#x2011;11] Consider implementing two-step procedure for updating protocol addresses
A copy-paste error or a typo may end up bricking protocol functionality, or sending tokens to an address with no known private key. Consider implementing a two-step procedure for updating protocol addresses, where the recipient is set as pending, and must 'accept' the assignment by making an affirmative call. A straight forward way of doing this would be to have the target contracts implement [EIP-165](https://eips.ethereum.org/EIPS/eip-165), and to have the 'set' functions ensure that the recipient is of the right interface type.

*There is one instance of this issue:*
```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

177         function setPrimeToken(address prime_) external onlyOwner {
178             _ensureZeroAddress(prime_);
179     
180             emit PrimeTokenUpdated(prime, prime_);
181             prime = prime_;

```
*GitHub*: [[177](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L177-L181)]




## Non-critical Issues

### [N&#x2011;01] Array indices should be referenced via `enum`s rather than via numeric literals

*There is one instance of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

// @audit assets[0]
684                 assets[0] = address(asset);

```
*GitHub*: [[684](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L684-L684)]



### [N&#x2011;02] Array is `push()`ed but not `pop()`ed
Array entries are added but are never removed. Consider whether this should be the case, or whether there should be a maximum, or whether old entries should be removed. Cases where there are specific potential problems will be flagged separately under a different issue.

*There is one instance of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

303             allMarkets.push(vToken);

```
*GitHub*: [[303](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L303-L303)]



### [N&#x2011;03] Consider adding a block/deny-list
Doing so will significantly increase centralization, but will help to prevent hackers from using stolen tokens

*There are 2 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

35    contract Prime is IIncomeDestination, AccessControlledV8, PausableUpgradeable, MaxLoopsLimitHelper, PrimeStorageV1 {

```
*GitHub*: [[35](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L35-L35)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

8   contract PrimeLiquidityProvider is AccessControlledV8, PausableUpgradeable {

```
*GitHub*: [[8](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L8-L8)]



### [N&#x2011;04] State variables should include comments
Consider adding some comments on critical state variables to explain what they are supposed to do: this will help for future code reviews.

*There is one instance of this issue:*
```solidity
File: contracts/Tokens/Prime/PrimeStorage.sol

31        uint256 internal constant EXP_SCALE = 1e18;

```
*GitHub*: [[31](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L31-L31)]



### [N&#x2011;05] Constants in comparisons should appear on the left side
Doing so will prevent [typo bugs](https://www.moserware.com/2008/01/constants-on-left-are-better-but-this.html)

*There are 26 instances of this issue:*

<details>

<summary>see instances</summary>

```solidity
File: contracts/Tokens/Prime/Prime.sol

106             if (_blocksPerYear == 0) revert InvalidBlocksPerYear();

201             if (pendingScoreUpdates == 0) revert NoScoreUpdatesRequired();

202             if (nextScoreUpdateRoundId == 0) revert NoScoreUpdatesRequired();

377             } else if (stakedAt[user] == 0 && isAccountEligible && !tokens[user].exists) {

398             if (stakedAt[msg.sender] == 0) revert IneligibleToClaim();

479             if (stakedAt[user] == 0) return STAKING_PERIOD;

576             if (distributionIncome == 0) {

810             if (_alphaDenominator == 0 || _alphaNumerator > _alphaDenominator) {

1002              if (totalScore == 0) return (0, 0);

1007              if (totalCappedValue == 0) return (0, 0);

1012              supplyAPR = totalSupply == 0 ? 0 : ((userSupplyIncomeYearly * MAXIMUM_BPS) / totalSupply);

1013              borrowAPR = totalBorrow == 0 ? 0 : ((userBorrowIncomeYearly * MAXIMUM_BPS) / totalBorrow);

```
*GitHub*: [[106](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L106-L106), [201](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L201-L201), [202](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L202-L202), [377](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L377-L377), [398](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L398-L398), [479](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L479-L479), [576](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L576-L576), [810](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L810-L810), [1002](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L1002-L1002), [1007](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L1007-L1007), [1012](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L1012-L1012), [1013](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L1013-L1013)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

335             if (lastBlockAccrued == 0) {

```
*GitHub*: [[335](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L335-L335)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath0x.sol

55            if (x <= 0) {

145             if (x == 0) {

206             if ((x & int256(0x0000000000000000000000000000001000000000000000000000000000000000)) != 0) {

212             if ((x & int256(0x0000000000000000000000000000000800000000000000000000000000000000)) != 0) {

218             if ((x & int256(0x0000000000000000000000000000000400000000000000000000000000000000)) != 0) {

224             if ((x & int256(0x0000000000000000000000000000000200000000000000000000000000000000)) != 0) {

230             if ((x & int256(0x0000000000000000000000000000000100000000000000000000000000000000)) != 0) {

236             if ((x & int256(0x0000000000000000000000000000000080000000000000000000000000000000)) != 0) {

242             if ((x & int256(0x0000000000000000000000000000000040000000000000000000000000000000)) != 0) {

248             if ((x & int256(0x0000000000000000000000000000000020000000000000000000000000000000)) != 0) {

254             if ((x & int256(0x0000000000000000000000000000000010000000000000000000000000000000)) != 0) {

```
*GitHub*: [[55](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L55-L55), [145](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L145-L145), [206](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L206-L206), [212](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L212-L212), [218](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L218-L218), [224](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L224-L224), [230](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L230-L230), [236](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L236-L236), [242](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L242-L242), [248](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L248-L248), [254](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L254-L254)]


```solidity
File: contracts/Tokens/Prime/libs/Scores.sol

43            // If any side is 0, exit early

```
*GitHub*: [[43](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L43-L43), [43](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L43-L44)]


</details>


### [N&#x2011;06] Contracts containing only utility functions should be made into libraries

*There is one instance of this issue:*
```solidity
File: contracts/Tokens/Prime/PrimeStorage.sol

6   contract PrimeStorageV1 {

```
*GitHub*: [[6](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L6-L6)]



### [N&#x2011;07] Custom error has no error details
Consider adding parameters to the error to indicate which user or values caused the failure

*There are 17 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

20    error MarketNotSupported();

21    error InvalidLimit();

22    error IneligibleToClaim();

23    error WaitMoreTime();

24    error UserHasNoPrimeToken();

25    error InvalidCaller();

26    error InvalidComptroller();

27    error NoScoreUpdatesRequired();

28    error MarketAlreadyExists();

29    error InvalidAddress();

30    error InvalidBlocksPerYear();

31    error InvalidAlphaArguments();

32    error InvalidVToken();

```
*GitHub*: [[20](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L20-L20), [21](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L21-L21), [22](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L22-L22), [23](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L23-L23), [24](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L24-L24), [25](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L25-L25), [26](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L26-L26), [27](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L27-L27), [28](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L28-L28), [29](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L29-L29), [30](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L30-L30), [31](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L31-L31), [32](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L32-L32)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

57        error InvalidArguments();

63        error InvalidCaller();

72        error FundsTransferIsPaused();

```
*GitHub*: [[57](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L57-L57), [63](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L63-L63), [72](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L72-L72)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath.sol

11    error InvalidFixedPoint();

```
*GitHub*: [[11](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol#L11-L11)]



### [N&#x2011;08] High cyclomatic complexity
Consider breaking down these blocks into more manageable units, by splitting things into utility functions, by reducing nesting, and by using early returns

*There are 2 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/libs/FixedMath0x.sol

// @audit number of blocks: 14
51        function ln(int256 x) internal pure returns (int256 r) {

// @audit number of blocks: 13
140         function exp(int256 x) internal pure returns (int256 r) {

```
*GitHub*: [[51](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L51-L51), [140](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L140-L140)]



### [N&#x2011;09] Consider using `delete` rather than assigning zero/false to clear values
The `delete` keyword more closely matches the semantics of what is being done, and draws more attention to the changing of state, which may lead to a more thorough audit of its associated logic

*There are 12 instances of this issue:*

<details>

<summary>see instances</summary>

```solidity
File: contracts/Tokens/Prime/Prime.sol

295             markets[vToken].rewardIndex = 0;

298             markets[vToken].sumOfMembersScore = 0;

376                 stakedAt[user] = 0;

401             stakedAt[msg.sender] = 0;

460             unreleasedPSRIncome[_getUnderlying(address(market))] = 0;

677             interests[vToken][user].accrued = 0;

688                     unreleasedPLPIncome[underlying] = 0;

736                 interests[_allMarkets[i]][user].score = 0;

737                 interests[_allMarkets[i]][user].rewardIndex = 0;

750             tokens[user].exists = false;

751             tokens[user].isIrrevocable = false;

```
*GitHub*: [[295](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L295-L295), [298](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L298-L298), [376](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L376-L376), [401](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L401-L401), [460](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L460-L460), [677](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L677-L677), [688](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L688-L688), [736](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L736-L736), [737](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L737-L737), [750](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L750-L750), [751](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L751-L751)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

200             tokenAmountAccrued[token_] = 0;

```
*GitHub*: [[200](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L200-L200)]


</details>


### [N&#x2011;10] Constant redefined elsewhere
Consider defining in only one contract so that values cannot become out of sync when only one location is updated. A [cheap way](https://medium.com/coinmonks/gas-cost-of-solidity-library-functions-dbe0cedd4678) to store constants in a single location is to create an `internal constant` in a `library`. If the variable is a local cache of another contract's value, consider making the cache variable internal or private, which will require external users to query the contract with the source of truth, so that callers don't get out of sync.

*There is one instance of this issue:*
```solidity
File: contracts/Tokens/Prime/PrimeStorage.sol

// @audit already seen at /contracts/Tokens/Prime/PrimeStorage.sol, /contracts/Tokens/Prime/PrimeLiquidityProvider.sol
31        uint256 internal constant EXP_SCALE = 1e18;

```
*GitHub*: [[31](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L31-L31)]



### [N&#x2011;11] Events should use parameters to convey information
For example, rather than using `event Paused()` and `event Unpaused()`, use `event PauseState(address indexed whoChangedIt, bool wasPaused, bool isNowPaused)`

*There are 2 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

51        event FundsTransferPaused();

54        event FundsTransferResumed();

```
*GitHub*: [[51](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L51-L51), [54](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L54-L54)]



### [N&#x2011;12] Enable IR-based code generation
The IR-based code generator was introduced with an aim to not only allow code generation to be more transparent and auditable but also to enable more powerful optimization passes that span across functions.
You can enable it on the command line using `--via-ir` or with the option `{"viaIR": true}`.
This will take longer to compile, but you can just simple test it before deploying and if you got a better benchmark then you can add --via-ir to your deploy command
More on: https://docs.soliditylang.org/en/v0.8.17/ir-breaking-changes.html

*There is one instance of this issue:*

Global finding


### [N&#x2011;13] Events that mark critical parameter changes should contain both the old and the new value
This should especially be done if the new value is not required to be different from the old value

*There are 2 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

// @audit updateAssetsState
462             emit UpdatedAssetsState(comptroller, asset);

```
*GitHub*: [[462](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L462-L462)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

// @audit _setTokenDistributionSpeed
324                 emit TokenDistributionSpeedUpdated(token_, distributionSpeed_);

```
*GitHub*: [[324](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L324-L324)]



### [N&#x2011;14] Events are missing sender information
When an action is triggered based on a user's action, not being able to filter based on who triggered the action makes event processing a lot more cumbersome. Including the `msg.sender` the events of these types of action will make events much more useful to end users, especially when `msg.sender` is not `tx.origin`.

*There are 13 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

241             emit AlphaUpdated(alphaNumerator, alphaDenominator, _alphaNumerator, _alphaDenominator);

269             emit MultiplierUpdated(
270                 market,
271                 markets[market].supplyMultiplier,
272                 markets[market].borrowMultiplier,
273                 supplyMultiplier,
274                 borrowMultiplier
275             );

308             emit MarketAdded(vToken, supplyMultiplier, borrowMultiplier);

320             emit MintLimitsUpdated(irrevocableLimit, revocableLimit, _irrevocableLimit, _revocableLimit);

462             emit UpdatedAssetsState(comptroller, asset);

694             emit InterestClaimed(user, vToken, amount);

718             emit Mint(user, isIrrevocable);

```
*GitHub*: [[241](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L241-L241), [269](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L269-L275), [308](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L308-L308), [320](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L320-L320), [462](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L462-L462), [694](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L694-L694), [718](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L718-L718)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

180             emit PrimeTokenUpdated(prime, prime_);

202             emit TokenTransferredToPrime(token_, accruedAmount);

222             emit SweepToken(address(token_), to_, amount_);

267                     emit TokensAccrued(token_, tokenAccrued);

300             emit TokenDistributionInitialized(token_);

324                 emit TokenDistributionSpeedUpdated(token_, distributionSpeed_);

```
*GitHub*: [[180](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L180-L180), [202](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L202-L202), [222](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L222-L222), [267](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L267-L267), [300](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L300-L300), [324](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L324-L324)]



### [N&#x2011;15] Events may be emitted out of order due to reentrancy
Ensure that events follow the best practice of check-effects-interaction, and are emitted before external calls

*There are 3 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

// @audit InterfaceComptroller(comptroller).markets(vToken) called before emit MarketAdded(vToken, supplyMultiplier, borrowMultiplier);
292             bool isMarketExist = InterfaceComptroller(comptroller).markets(vToken);
293             if (!isMarketExist) revert InvalidVToken();
294     
295             markets[vToken].rewardIndex = 0;
296             markets[vToken].supplyMultiplier = supplyMultiplier;
297             markets[vToken].borrowMultiplier = borrowMultiplier;
298             markets[vToken].sumOfMembersScore = 0;
299             markets[vToken].exists = true;
300     
301             vTokenForAsset[_getUnderlying(vToken)] = vToken;
302     
303             allMarkets.push(vToken);
304             _startScoreUpdateRound();
305     
306             _ensureMaxLoops(allMarkets.length);
307     
308             emit MarketAdded(vToken, supplyMultiplier, borrowMultiplier);

// @audit asset.safeTransfer(user, amount) called before emit InterestClaimed(user, vToken, amount);
692             asset.safeTransfer(user, amount);
693     
694             emit InterestClaimed(user, vToken, amount);

```
*GitHub*: [[292](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L292-L308), [692](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L692-L694)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

// @audit IERC20Upgradeable(token_).balanceOf(address(this)) called before emit TokensAccrued(token_, tokenAccrued);
259                 uint256 balance = IERC20Upgradeable(token_).balanceOf(address(this));
260     
261                 uint256 balanceDiff = balance - tokenAmountAccrued[token_];
262                 if (distributionSpeed > 0 && balanceDiff > 0) {
263                     uint256 accruedSinceUpdate = deltaBlocks * distributionSpeed;
264                     uint256 tokenAccrued = (balanceDiff <= accruedSinceUpdate ? balanceDiff : accruedSinceUpdate);
265     
266                     tokenAmountAccrued[token_] += tokenAccrued;
267                     emit TokensAccrued(token_, tokenAccrued);

```
*GitHub*: [[259](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L259-L267)]



### [N&#x2011;16] Use of floating pragma
Locking the pragma helps avoid accidental deploys with an outdated compiler version that may introduce bugs and unexpected vulnerabilities.

Floating pragma is meant to be used for libraries and contracts that have external users and need backward compatibility.

*There is one instance of this issue:*
```solidity
File: contracts/Tokens/Prime/IPrime.sol

2   pragma solidity ^0.5.16;

```
*GitHub*: [[2](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/IPrime.sol#L2-L2)]



### [N&#x2011;17] Consider adding formal verification proofs
Consider using formal verification to mathematically prove that your code does what is intended, and does not have any edge cases with unexpected behavior. The solidity compiler itself has this functionality [built in](https://docs.soliditylang.org/en/latest/smtchecker.html#smtchecker-and-formal-verification)

*There is one instance of this issue:*

Global finding


### [N&#x2011;18] Contracts should have full test coverage
While 100% code coverage does not guarantee that there are no bugs, it often will catch easy-to-find bugs, and will ensure that there are fewer regressions when the code invariably has to be modified. Furthermore, in order to get full coverage, code authors will often have to re-organize their code so that it is more modular, so that each component can be tested separately, which reduces interdependencies between modules and layers, and makes for code that is easier to reason about and audit.

*There is one instance of this issue:*

Global finding


### [N&#x2011;19] Contract should expose an `interface`
All `external`/`public` functions should extend an `interface`. This is useful to make sure that the whole API is extracted.

*There are 26 instances of this issue:*

<details>

<summary>see instances</summary>

```solidity
File: contracts/Tokens/Prime/Prime.sol

174         function getPendingInterests(address user) external returns (PendingInterest[] memory pendingInterests) {

200         function updateScores(address[] memory users) external {

237         function updateAlpha(uint128 _alphaNumerator, uint128 _alphaDenominator) external {

263         function updateMultipliers(address market, uint256 supplyMultiplier, uint256 borrowMultiplier) external {

288         function addMarket(address vToken, uint256 supplyMultiplier, uint256 borrowMultiplier) external {

316         function setLimit(uint256 _irrevocableLimit, uint256 _revocableLimit) external {

331         function issue(bool isIrrevocable, address[] calldata users) external {

397         function claim() external {

411         function burn(address user) external {

419         function togglePause() external {

433         function claimInterest(address vToken) external whenNotPaused returns (uint256) {

443         function claimInterest(address vToken, address user) external whenNotPaused returns (uint256) {

452         function updateAssetsState(address _comptroller, address asset) external {

469         function getAllMarkets() external view returns (address[] memory) {

478         function claimTimeRemaining(address user) external view returns (uint256) {

496         function calculateAPR(address market, address user) external view returns (uint256 supplyAPR, uint256 borrowAPR) {

527         function estimateAPR(
528             address market,
529             address user,
530             uint256 borrow,
531             uint256 supply,
532             uint256 xvsStaked
533         ) external view returns (uint256 supplyAPR, uint256 borrowAPR) {

597         function getInterestAccrued(address vToken, address user) public returns (uint256) {

```
*GitHub*: [[174](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L174-L174), [200](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L200-L200), [237](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L237-L237), [263](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L263-L263), [288](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L288-L288), [316](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L316-L316), [331](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L331-L331), [397](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L397-L397), [411](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L411-L411), [419](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L419-L419), [433](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L433-L433), [443](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L443-L443), [452](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L452-L452), [469](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L469-L469), [478](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L478-L478), [496](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L496-L496), [527](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L527-L533), [597](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L597-L597)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

90        function initialize(
91            address accessControlManager_,
92            address[] calldata tokens_,
93            uint256[] calldata distributionSpeeds_
94        ) external initializer {

118         function initializeTokens(address[] calldata tokens_) external onlyOwner {

132         function pauseFundsTransfer() external {

141         function resumeFundsTransfer() external {

153         function setTokensDistributionSpeed(address[] calldata tokens_, uint256[] calldata distributionSpeeds_) external {

177         function setPrimeToken(address prime_) external onlyOwner {

216         function sweepToken(IERC20Upgradeable token_, address to_, uint256 amount_) external onlyOwner {

276         function getBlockNumber() public view virtual returns (uint256) {

```
*GitHub*: [[90](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L90-L94), [118](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L118-L118), [132](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L132-L132), [141](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L141-L141), [153](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L153-L153), [177](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L177-L177), [216](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L216-L216), [276](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L276-L276)]


</details>


### [N&#x2011;20] Large or complicated code bases should implement invariant tests
Large code bases, or code with lots of inline-assembly, complicated math, or complicated interactions between multiple contracts, should implement [invariant fuzzing tests](https://medium.com/coinmonks/smart-contract-fuzzing-d9b88e0b0a05). Invariant fuzzers such as Echidna require the test writer to come up with invariants which should not be violated under any circumstances, and the fuzzer tests various inputs and function calls to ensure that the invariants always hold. Even code with 100% code coverage can still have bugs due to the order of the operations a user performs, and invariant fuzzers, with properly and extensively-written invariants, can close this testing gap significantly.

*There is one instance of this issue:*

Global finding


### [N&#x2011;21] Variables need not be initialized to zero
The default value for variables is zero, so initializing them to zero is superfluous.

*There are 10 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

178             for (uint256 i = 0; i < _allMarkets.length; ) {

204             for (uint256 i = 0; i < users.length; ) {

211                 for (uint256 j = 0; j < _allMarkets.length; ) {

246             for (uint256 i = 0; i < allMarkets.length; ) {

335                 for (uint256 i = 0; i < users.length; ) {

349                 for (uint256 i = 0; i < users.length; ) {

609             for (uint256 i = 0; i < _allMarkets.length; ) {

625             for (uint256 i = 0; i < _allMarkets.length; ) {

730             for (uint256 i = 0; i < _allMarkets.length; ) {

```
*GitHub*: [[178](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L178-L178), [204](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L204-L204), [211](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L211-L211), [246](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L246-L246), [335](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L335-L335), [349](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L349-L349), [609](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L609-L609), [625](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L625-L625), [730](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L730-L730)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath0x.sol

46        int256 private constant EXP_MAX_VAL = 0;

```
*GitHub*: [[46](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L46-L46)]



### [N&#x2011;22] Invalid NatSpec comment style
NatSpec [must](https://docs.soliditylang.org/en/latest/natspec-format.html#documentation-example) begin with `///`, or use the `/* ... */` syntax.

*There are 75 instances of this issue:*

<details>

<summary>see instances</summary>

```solidity
File: contracts/Tokens/Prime/Prime.sol

111             // Note that the contract is upgradeable. Use initialize() or reinitializers

112             // to set the state variables.

```
*GitHub*: [[111](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L111-L111), [112](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L112-L112)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

316                 // Distribution speed updated so let's update distribution state to ensure that

317                 //  1. Token accrued properly for the old speed, and

318                 //  2. Token accrued at the new speed starts after this block.

321                 // Update speed

```
*GitHub*: [[316](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L316-L316), [317](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L317-L317), [318](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L318-L318), [321](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L321-L321)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath.sol

2   // solhint-disable var-name-mixedcase

36            // multiply `u` by FIXED_1 to cancel out the built-in FIXED_1 in f

48            // divide the product by FIXED_1 to cancel out the built-in FIXED_1 in f

```
*GitHub*: [[2](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol#L2-L2), [36](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol#L36-L36), [48](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol#L48-L48)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath0x.sol

2   // solhint-disable max-line-length

6   // Below is code from 0x's LibFixedMath.sol. Changes:

7   // - addition of 0.8-style errors

8   // - removal of unused functions

9   // - added comments for clarity

10    // https://github.com/0xProject/exchange-v3/blob/aae46bef841bfd1cc31028f41793db4fe7197084/contracts/staking/contracts/src/libs/LibFixedMath.sol

39        // Base for the fixed point numbers (this is our 1)

41        // Maximum ln argument (1)

43        // Minimum ln argument. Notice this is related to EXP_MIN_VAL (e ^ -63.875)

45        // Maximum exp argument (0)

47        // Minimum exp argument. Notice this is related to LN_MIN_VAL (-63.875)

69            // Rewrite the input as a quotient of negative natural exponents and a single residual q, such that 1 < q < 2

70            // For example: log(0.3) = log(e^-1 * e^-0.25 * 1.0471028872385522)

71            //              = 1 - 0.25 - log(1 + 0.0471028872385522)

72            // e ^ -32

77            // e ^ -16

82            // e ^ -8

87            // e ^ -4

92            // e ^ -2

97            // e ^ -1

102             // e ^ -0.5

107             // e ^ -0.25

112             // e ^ -0.125

117             // `x` is now our residual in the range of 1 <= x <= 2 (or close enough).

119             // Add the taylor series for log(1 + z), where z = x - 1

142                 // Saturate to zero below EXP_MIN_VAL.

152             // Rewrite the input as a product of natural exponents and a

153             // single residual q, where q is a number of small magnitude.

154             // For example: e^-34.419 = e^(-32 - 2 - 0.25 - 0.125 - 0.044)

155             //              = e^-32 * e^-2 * e^-0.25 * e^-0.125 * e^-0.044

156             //              -> q = -0.044

158             // Multiply with the taylor series for e^q

161             // q = x % 0.125 (the residual)

203             // Multiply with the non-residual terms.

205             // e ^ -32

211             // e ^ -16

217             // e ^ -8

223             // e ^ -4

229             // e ^ -2

235             // e ^ -1

241             // e ^ -0.5

247             // e ^ -0.25

253             // e ^ -0.125

```
*GitHub*: [[2](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L2-L2), [6](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L6-L6), [7](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L7-L7), [8](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L8-L8), [9](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L9-L9), [10](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L10-L10), [39](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L39-L39), [41](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L41-L41), [43](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L43-L43), [45](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L45-L45), [47](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L47-L47), [69](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L69-L69), [70](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L70-L70), [71](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L71-L71), [72](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L72-L72), [77](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L77-L77), [82](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L82-L82), [87](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L87-L87), [92](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L92-L92), [97](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L97-L97), [102](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L102-L102), [107](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L107-L107), [112](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L112-L112), [117](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L117-L117), [119](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L119-L119), [142](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L142-L142), [152](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L152-L152), [153](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L153-L153), [154](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L154-L154), [155](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L155-L155), [156](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L156-L156), [158](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L158-L158), [161](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L161-L161), [203](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L203-L203), [205](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L205-L205), [211](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L211-L211), [217](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L217-L217), [223](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L223-L223), [229](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L229-L229), [235](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L235-L235), [241](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L241-L241), [247](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L247-L247), [253](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L253-L253)]


```solidity
File: contracts/Tokens/Prime/libs/Scores.sol

28            // Score function is:

29            // xvs^𝝰 * capital^(1-𝝰)

30            //    = capital * capital^(-𝝰) * xvs^𝝰

31            //    = capital * (xvs / capital)^𝝰

32            //    = capital * (e ^ (ln(xvs / capital))) ^ 𝝰

33            //    = capital * e ^ (𝝰 * ln(xvs / capital))     (1)

35            //    = capital / ( 1 / e ^ (𝝰 * ln(xvs / capital)))

36            //    = capital / (e ^ (𝝰 * ln(xvs / capital)) ^ -1)

37            //    = capital / e ^ (𝝰 * -1 * ln(xvs / capital))

38            //    = capital / e ^ (𝝰 * ln(capital / xvs))     (2)

40            // To avoid overflows, use (1) when xvs < capital and

41            // use (2) when capital < xvs

44            if (xvs == 0 || capital == 0) return 0;

46            // If both sides are equal, we have:

47            // xvs^𝝰 * capital^(1-𝝰)

48            //    = xvs^𝝰 * xvs^(1-𝝰)

52            bool lessxvsThanCapital = xvs < capital;

55            int256 ratio = lessxvsThanCapital ? FixedMath.toFixed(xvs, capital) : FixedMath.toFixed(capital, xvs);

62            if (lessxvsThanCapital) {

64                return FixedMath.uintMul(capital, exponentiation);

```
*GitHub*: [[28](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L28-L28), [29](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L29-L29), [30](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L30-L30), [31](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L31-L31), [32](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L32-L32), [33](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L33-L33), [33](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L33-L33), [35](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L35-L35), [36](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L36-L36), [37](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L37-L37), [38](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L38-L38), [38](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L38-L38), [40](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L40-L40), [40](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L40-L40), [41](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L41-L41), [44](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L44-L44), [46](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L46-L46), [47](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L47-L47), [48](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L48-L48), [52](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L52-L52), [55](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L55-L55), [62](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L62-L62), [64](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L64-L64)]


</details>


### [N&#x2011;23] Large multiples of ten should use scientific notation (e.g. 1e6) rather than decimal literals (e.g. `1000000`), for readability

*There are 3 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/PrimeStorage.sol

34        uint256 public constant MINIMUM_STAKED_XVS = 1000 * EXP_SCALE;

37        uint256 public constant MAXIMUM_XVS_CAP = 100000 * EXP_SCALE;

43        uint256 internal constant MAXIMUM_BPS = 10000;

```
*GitHub*: [[34](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L34-L34), [37](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L37-L37), [43](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L43-L43)]



### [N&#x2011;24] Large numeric literals should use underscores for readability.

*There are 2 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/PrimeStorage.sol

37        uint256 public constant MAXIMUM_XVS_CAP = 100000 * EXP_SCALE;

43        uint256 internal constant MAXIMUM_BPS = 10000;

```
*GitHub*: [[37](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L37-L37), [43](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L43-L43)]



### [N&#x2011;25] Use the latest solidity (prior to 0.8.20 if on L2s) for deployment
```
When deploying contracts, you should use the latest released version of Solidity. Apart from exceptional cases, only the latest version receives security fixes.
```
https://docs.soliditylang.org/en/v0.8.21/

*There are 7 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/IPrime.sol

2   pragma solidity ^0.5.16;

```
*GitHub*: [[2](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/IPrime.sol#L2-L2)]


```solidity
File: contracts/Tokens/Prime/Prime.sol

2   pragma solidity 0.8.13;

```
*GitHub*: [[2](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L2-L2)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

2   pragma solidity 0.8.13;

```
*GitHub*: [[2](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L2-L2)]


```solidity
File: contracts/Tokens/Prime/PrimeStorage.sol

2   pragma solidity 0.8.13;

```
*GitHub*: [[2](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L2-L2)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath.sol

4   pragma solidity 0.8.13;

```
*GitHub*: [[4](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol#L4-L4)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath0x.sol

4   pragma solidity 0.8.13;

```
*GitHub*: [[4](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L4-L4)]


```solidity
File: contracts/Tokens/Prime/libs/Scores.sol

3   pragma solidity 0.8.13;

```
*GitHub*: [[3](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L3-L3)]



### [N&#x2011;26] Contract does not follow the Solidity style guide's suggested layout ordering
This is a [best practice](https://docs.soliditylang.org/en/latest/style-guide.html#order-of-layout) that should be followed.

Inside each contract, library or interface, use the following order:

1. Type declarations
2. State variables
3. Events
4. Errors
5. Modifiers
6. Functions

*There is one instance of this issue:*
```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

// @audit Correct order: InvalidArguments -> FundsTransferResumed
8   contract PrimeLiquidityProvider is AccessControlledV8, PausableUpgradeable {

```
*GitHub*: [[8](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L8-L8)]



### [N&#x2011;27] File is missing NatSpec

*There is one instance of this issue:*
```solidity
File: contracts/Tokens/Prime/IPrime.sol

```
*GitHub*: [various](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/IPrime.sol)



### [N&#x2011;28] Multiple `address`/ID mappings can be combined into a single `mapping` of an `address`/ID to a `struct`, for readability
Well-organized data structures make code reviews easier, which may lead to fewer bugs. Consider combining related mappings into mappings to structs, so it's clear what data is related

*There are 2 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

21        mapping(address => uint256) public tokenDistributionSpeeds;
22    
23        /// @notice The rate at which token is distributed to the Prime contract
24        mapping(address => uint256) public lastAccruedBlock;
25    
26        /// @notice The token accrued but not yet transferred to prime contract
27        mapping(address => uint256) public tokenAmountAccrued;

```
*GitHub*: [[21](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L21-L27)]


```solidity
File: contracts/Tokens/Prime/PrimeStorage.sol

46        mapping(address => Token) public tokens;
47    
48        /// @notice  Tracks total irrevocable tokens minted
49        uint256 public totalIrrevocable;
50    
51        /// @notice  Tracks total revocable tokens minted
52        uint256 public totalRevocable;
53    
54        /// @notice  Indicates maximum revocable tokens that can be minted
55        uint256 public revocableLimit;
56    
57        /// @notice  Indicates maximum irrevocable tokens that can be minted
58        uint256 public irrevocableLimit;
59    
60        /// @notice Tracks when prime token eligible users started staking for claiming prime token
61        mapping(address => uint256) public stakedAt;
62    
63        /// @notice vToken to market configuration
64        mapping(address => Market) public markets;
65    
66        /// @notice vToken to user to user index
67        mapping(address => mapping(address => Interest)) public interests;
68    
69        /// @notice A list of boosted markets
70        address[] internal allMarkets;
71    
72        /// @notice numberator of alpha. Ex: if alpha is 0.5 then this will be 1
73        uint128 public alphaNumerator;
74    
75        /// @notice denominator of alpha. Ex: if alpha is 0.5 then this will be 2
76        uint128 public alphaDenominator;
77    
78        /// @notice address of XVS vault
79        address internal xvsVault;
80    
81        /// @notice address of XVS vault reward token
82        address internal xvsVaultRewardToken;
83    
84        /// @notice address of XVS vault pool id
85        uint256 internal xvsVaultPoolId;
86    
87        /// @notice mapping to check if a account's score was updated in the round
88        mapping(uint256 => mapping(address => bool)) public isScoreUpdated;
89    
90        /// @notice unique id for next round
91        uint256 public nextScoreUpdateRoundId;
92    
93        /// @notice total number of accounts whose score needs to be updated
94        uint256 public totalScoreUpdatesRequired;
95    
96        /// @notice total number of accounts whose score is yet to be updated
97        uint256 public pendingScoreUpdates;
98    
99        /// @notice mapping used to find if an asset is part of prime markets
100        mapping(address => address) public vTokenForAsset;
101    
102        /// @notice address of protocol share reserve contract
103        address public protocolShareReserve;
104    
105        /// @notice address of core pool comptroller contract
106        address public comptroller;
107    
108        /// @notice unreleased income from PSR that's already distributed to prime holders
109        /// @dev mapping of asset adress => amount
110        mapping(address => uint256) public unreleasedPSRIncome;
111    
112        /// @notice unreleased income from PLP that's already distributed to prime holders
113        /// @dev mapping of asset adress => amount
114        mapping(address => uint256) public unreleasedPLPIncome;

```
*GitHub*: [[46](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L46-L114)]



### [N&#x2011;29] Not using the named return variables anywhere in the function is confusing
Consider changing the variable to be an unnamed one, since the variable is never assigned, nor is it returned by name. If the optimizer is not turned on, leaving the code as it is will also waste gas for the stack variable.

*There are 7 instances of this issue:*

<details>

<summary>see instances</summary>

```solidity
File: contracts/Tokens/Prime/Prime.sol

// @audit pendingInterests
174         function getPendingInterests(address user) external returns (PendingInterest[] memory pendingInterests) {

// @audit supplyAPR
// @audit borrowAPR
496         function calculateAPR(address market, address user) external view returns (uint256 supplyAPR, uint256 borrowAPR) {

// @audit supplyAPR
// @audit borrowAPR
527         function estimateAPR(
528             address market,
529             address user,
530             uint256 borrow,
531             uint256 supply,
532             uint256 xvsStaked
533         ) external view returns (uint256 supplyAPR, uint256 borrowAPR) {

```
*GitHub*: [[174](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L174-L174), [496](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L496-L496), [496](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L496-L496), [527](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L527-L533), [527](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L527-L533)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath.sol

// @audit r
53        function ln(int256 x) internal pure returns (int256 r) {

// @audit r
58        function exp(int256 x) internal pure returns (int256 r) {

```
*GitHub*: [[53](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol#L53-L53), [58](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol#L58-L58)]


</details>


### [N&#x2011;30] NatSpec: Function declarations should have descriptions

*There are 3 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

103         constructor(address _wbnb, address _vbnb, uint256 _blocksPerYear) {

```
*GitHub*: [[103](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L103-L103)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

78        constructor() {

```
*GitHub*: [[78](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L78-L78)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath0x.sol

51        function ln(int256 x) internal pure returns (int256 r) {

```
*GitHub*: [[51](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L51-L51)]



### [N&#x2011;31] NatSpec: Contract declarations should have `@author` annotations

*There are 7 instances of this issue:*

<details>

<summary>see instances</summary>

```solidity
File: contracts/Tokens/Prime/IPrime.sol

4   interface IPrime {

```
*GitHub*: [[4](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/IPrime.sol#L4-L4)]


```solidity
File: contracts/Tokens/Prime/Prime.sol

35    contract Prime is IIncomeDestination, AccessControlledV8, PausableUpgradeable, MaxLoopsLimitHelper, PrimeStorageV1 {

```
*GitHub*: [[35](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L35-L35)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

8   contract PrimeLiquidityProvider is AccessControlledV8, PausableUpgradeable {

```
*GitHub*: [[8](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L8-L8)]


```solidity
File: contracts/Tokens/Prime/PrimeStorage.sol

6   contract PrimeStorageV1 {

```
*GitHub*: [[6](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L6-L6)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath.sol

13    library FixedMath {

```
*GitHub*: [[13](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol#L13-L13)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath0x.sol

38    library FixedMath0x {

```
*GitHub*: [[38](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L38-L38)]


```solidity
File: contracts/Tokens/Prime/libs/Scores.sol

10    library Scores {

```
*GitHub*: [[10](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L10-L10)]


</details>


### [N&#x2011;32] NatSpec: Contract declarations should have descriptions
e.g. `@dev` or `@notice`, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec

*There are 7 instances of this issue:*

<details>

<summary>see instances</summary>

```solidity
File: contracts/Tokens/Prime/IPrime.sol

4   interface IPrime {

```
*GitHub*: [[4](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/IPrime.sol#L4-L4)]


```solidity
File: contracts/Tokens/Prime/Prime.sol

35    contract Prime is IIncomeDestination, AccessControlledV8, PausableUpgradeable, MaxLoopsLimitHelper, PrimeStorageV1 {

```
*GitHub*: [[35](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L35-L35)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

8   contract PrimeLiquidityProvider is AccessControlledV8, PausableUpgradeable {

```
*GitHub*: [[8](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L8-L8)]


```solidity
File: contracts/Tokens/Prime/PrimeStorage.sol

6   contract PrimeStorageV1 {

```
*GitHub*: [[6](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L6-L6)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath.sol

13    library FixedMath {

```
*GitHub*: [[13](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol#L13-L13)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath0x.sol

38    library FixedMath0x {

```
*GitHub*: [[38](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L38-L38)]


```solidity
File: contracts/Tokens/Prime/libs/Scores.sol

10    library Scores {

```
*GitHub*: [[10](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L10-L10)]


</details>


### [N&#x2011;33] NatSpec: State variable declarations should have descriptions
e.g. `@notice` for public state variables, and `@dev` for [non-public](https://docs.soliditylang.org/en/latest/natspec-format.html#tags) ones

*There is one instance of this issue:*
```solidity
File: contracts/Tokens/Prime/PrimeStorage.sol

31        uint256 internal constant EXP_SCALE = 1e18;

```
*GitHub*: [[31](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L31-L31)]



### [N&#x2011;34] NatSpec: Contract declarations should have `@title` annotations

*There are 7 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/IPrime.sol

4   interface IPrime {

```
*GitHub*: [[4](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/IPrime.sol#L4-L4)]


```solidity
File: contracts/Tokens/Prime/Prime.sol

35    contract Prime is IIncomeDestination, AccessControlledV8, PausableUpgradeable, MaxLoopsLimitHelper, PrimeStorageV1 {

```
*GitHub*: [[35](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L35-L35)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

8   contract PrimeLiquidityProvider is AccessControlledV8, PausableUpgradeable {

```
*GitHub*: [[8](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L8-L8)]


```solidity
File: contracts/Tokens/Prime/PrimeStorage.sol

6   contract PrimeStorageV1 {

```
*GitHub*: [[6](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L6-L6)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath.sol

13    library FixedMath {

```
*GitHub*: [[13](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol#L13-L13)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath0x.sol

38    library FixedMath0x {

```
*GitHub*: [[38](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L38-L38)]


```solidity
File: contracts/Tokens/Prime/libs/Scores.sol

10    library Scores {

```
*GitHub*: [[10](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L10-L10)]



### [N&#x2011;35] `else`-block not required
One level of nesting can be removed by not having an `else` block when the `if`-block returns, and `if (foo) { return 1; } else { return 2; }` becomes `if (foo) { return 1; } return 2;`

*There are 3 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

482             if (totalTimeStaked < STAKING_PERIOD) {
483                 return STAKING_PERIOD - totalTimeStaked;
484             } else {
485                 return 0;
486             }

855             if (xvs > MAXIMUM_XVS_CAP) {
856                 return MAXIMUM_XVS_CAP;
857             } else {
858                 return xvs;
859             }

931             if (vToken == VBNB) {
932                 return WBNB;
933             } else {
934                 return IVToken(vToken).underlying();
935             }

```
*GitHub*: [[482](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L482-L486), [855](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L855-L859), [931](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L931-L935)]



### [N&#x2011;36] Numeric values having to do with time should use time units for readability
There are [units](https://docs.soliditylang.org/en/latest/units-and-global-variables.html#time-units) for seconds, minutes, hours, days, and weeks, and since they're defined, they should be used


*There is one instance of this issue:*
```solidity
File: contracts/Tokens/Prime/PrimeStorage.sol

// "@audit 60"
40        uint256 public constant STAKING_PERIOD = 90 * 24 * 60 * 60;

```
*GitHub*: [[40](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L40-L40)]



### [N&#x2011;37] Polymorphic functions make security audits more time-consuming and error-prone
The instances below point to one of two functions with the same name. Consider naming each function differently, in order to make code navigation and analysis easier.

*There is one instance of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

// @audit found also on line 433
443         function claimInterest(address vToken, address user) external whenNotPaused returns (uint256) {

```
*GitHub*: [[443](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L443-L443)]



### [N&#x2011;38] Setters should prevent re-setting of the same value
This especially problematic when the setter also emits the same value, which may be confusing to offline parsers

*There are 6 instances of this issue:*

<details>

<summary>see instances</summary>

```solidity
File: contracts/Tokens/Prime/Prime.sol

// @audit check alphaNumerator = _alphaNumerator
// @audit check alphaDenominator = _alphaDenominator
237         function updateAlpha(uint128 _alphaNumerator, uint128 _alphaDenominator) external {
238             _checkAccessAllowed("updateAlpha(uint128,uint128)");
239             _checkAlphaArguments(_alphaNumerator, _alphaDenominator);
240     
241             emit AlphaUpdated(alphaNumerator, alphaDenominator, _alphaNumerator, _alphaDenominator);
242     
243             alphaNumerator = _alphaNumerator;
244             alphaDenominator = _alphaDenominator;
245     
246             for (uint256 i = 0; i < allMarkets.length; ) {
247                 accrueInterest(allMarkets[i]);
248     
249                 unchecked {
250                     i++;
251                 }
252             }
253     
254             _startScoreUpdateRound();
255         }

// @audit check vTokenForAsset[_getUnderlying(vToken)] = vToken
288         function addMarket(address vToken, uint256 supplyMultiplier, uint256 borrowMultiplier) external {
289             _checkAccessAllowed("addMarket(address,uint256,uint256)");
290             if (markets[vToken].exists) revert MarketAlreadyExists();
291     
292             bool isMarketExist = InterfaceComptroller(comptroller).markets(vToken);
293             if (!isMarketExist) revert InvalidVToken();
294     
295             markets[vToken].rewardIndex = 0;
296             markets[vToken].supplyMultiplier = supplyMultiplier;
297             markets[vToken].borrowMultiplier = borrowMultiplier;
298             markets[vToken].sumOfMembersScore = 0;
299             markets[vToken].exists = true;
300     
301             vTokenForAsset[_getUnderlying(vToken)] = vToken;
302     
303             allMarkets.push(vToken);
304             _startScoreUpdateRound();
305     
306             _ensureMaxLoops(allMarkets.length);
307     
308             emit MarketAdded(vToken, supplyMultiplier, borrowMultiplier);
309         }

// @audit check revocableLimit = _revocableLimit
// @audit check irrevocableLimit = _irrevocableLimit
316         function setLimit(uint256 _irrevocableLimit, uint256 _revocableLimit) external {
317             _checkAccessAllowed("setLimit(uint256,uint256)");
318             if (_irrevocableLimit < totalIrrevocable || _revocableLimit < totalRevocable) revert InvalidLimit();
319     
320             emit MintLimitsUpdated(irrevocableLimit, revocableLimit, _irrevocableLimit, _revocableLimit);
321     
322             revocableLimit = _revocableLimit;
323             irrevocableLimit = _irrevocableLimit;
324         }

```
*GitHub*: [[237](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L237-L255), [237](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L237-L255), [288](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L288-L309), [316](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L316-L324), [316](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L316-L324)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

// @audit check prime = prime_
177         function setPrimeToken(address prime_) external onlyOwner {
178             _ensureZeroAddress(prime_);
179     
180             emit PrimeTokenUpdated(prime, prime_);
181             prime = prime_;
182         }

```
*GitHub*: [[177](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L177-L182)]


</details>


### [N&#x2011;39] Redundant return statement in a function with named return variables
Because the return variable (or its default value) has been assigned, explicit return at the end of the function is unnecessary, as it is returned automatically.

*There is one instance of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

174         function getPendingInterests(address user) external returns (PendingInterest[] memory pendingInterests) {

```
*GitHub*: [[174](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L174-L174)]



### [N&#x2011;40] Missing checks for state variable assignments
Consider whether reasonable bounds checks for variables would be useful

*There are 5 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

151             alphaNumerator = _alphaNumerator;

152             alphaDenominator = _alphaDenominator;

154             xvsVaultPoolId = _xvsVaultPoolId;

243             alphaNumerator = _alphaNumerator;

244             alphaDenominator = _alphaDenominator;

```
*GitHub*: [[151](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L151-L151), [152](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L152-L152), [154](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L154-L154), [243](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L243-L243), [244](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L244-L244)]



### [N&#x2011;41] Long functions should be refactored into multiple, smaller, functions

*There are 2 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/libs/FixedMath0x.sol

// @audit Lines in function body: 85
51        function ln(int256 x) internal pure returns (int256 r) {

// @audit Lines in function body: 118
140         function exp(int256 x) internal pure returns (int256 r) {

```
*GitHub*: [[51](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L51-L51), [140](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L140-L140)]



### [N&#x2011;42] Lines are too long
Usually lines in source code are limited to [80](https://softwareengineering.stackexchange.com/questions/148677/why-is-80-characters-the-standard-limit-for-code-width) characters. Today's screens are much larger so it's reasonable to stretch this in some cases. The solidity style guide recommends a maximum line length of [120 characters](https://docs.soliditylang.org/en/v0.8.17/style-guide.html#maximum-line-length), so the lines below should be split when they reach that length.

*There are 11 instances of this issue:*

<details>

<summary>see instances</summary>

```solidity
File: contracts/Tokens/Prime/Prime.sol

4   import { SafeERC20Upgradeable, IERC20Upgradeable } from "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";

775          * @notice Accrue rewards for the user. Must be called by Comptroller before changing account's borrow or supply balance.

902          * @return isEligible true if the staked XVS amount is enough to consider the associated user eligible for a Prime token, false otherwise

928          * @return underlying The address of the underlying token associated with the VToken, or the address of the WBNB token if the market is VBNB

```
*GitHub*: [[4](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L4-L4), [775](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L775-L775), [902](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L902-L902), [928](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L928-L928)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

4   import { SafeERC20Upgradeable, IERC20Upgradeable } from "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";

213          * @custom:error Throw InsufficientBalance if amount_ is greater than the available balance of the token in the contract

```
*GitHub*: [[4](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L4-L4), [213](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L213-L213)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath0x.sol

10    // https://github.com/0xProject/exchange-v3/blob/aae46bef841bfd1cc31028f41793db4fe7197084/contracts/staking/contracts/src/libs/LibFixedMath.sol

105                 x = (x * FIXED_1) / int256(0x000000000000000000000000000000004da2cbf1be5828000000000000000000); // / e ^ -0.5

110                 x = (x * FIXED_1) / int256(0x0000000000000000000000000000000063afbe7ab2082c000000000000000000); // / e ^ -0.25

115                 x = (x * FIXED_1) / int256(0x0000000000000000000000000000000070f5a893b608861e1f58934f97aea57d); // / e ^ -0.125

136             r += (z * (0x088888888888888888888888888888888 - y)) / 0x800000000000000000000000000000000; // add y^15 / 15 - y^16 / 16

```
*GitHub*: [[10](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L10-L10), [105](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L105-L105), [110](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L110-L110), [115](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L115-L115), [136](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L136-L136)]


</details>


### [N&#x2011;43] Top-level declarations should be separated by at least two lines

*There is one instance of this issue:*
```solidity
File: contracts/Tokens/Prime/libs/FixedMath0x.sol

140         function exp(int256 x) internal pure returns (int256 r) {

```
*GitHub*: [[140](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L140-L140)]



### [N&#x2011;44] Typos

*There are 7 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

// @audit updation
47        /// @notice Emitted on updation of initial balance for token

// @audit intrest
74        /// @notice Error thrown when intrest accrue is called for not initialized token

```
*GitHub*: [[47](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L47-L47), [74](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L74-L74)]


```solidity
File: contracts/Tokens/Prime/PrimeStorage.sol

// @audit maxmimum
42        /// @notice maxmimum BPS = 100%

// @audit metadata
45        /// @notice Mapping to get prime token's metadata

// @audit numberator
72        /// @notice numberator of alpha. Ex: if alpha is 0.5 then this will be 1

// @audit adress
108         /// @notice unreleased income from PSR that's already distributed to prime holders
109         /// @dev mapping of asset adress => amount

// @audit adress
112         /// @notice unreleased income from PLP that's already distributed to prime holders
113         /// @dev mapping of asset adress => amount

```
*GitHub*: [[42](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L42-L42), [45](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L45-L45), [72](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L72-L72), [108](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L108-L109), [112](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L112-L113)]



### [N&#x2011;45] Consider bounding input array length
The functions below take in an unbounded array, and make function calls for entries in the array. While the function will revert if it eventually runs out of gas, it may be a nicer user experience to `require()` that the length of the array is below some reasonable maximum, so that the user doesn't have to use up a full transaction's gas only to see that the transaction reverts.


*There are 6 instances of this issue:*

<details>

<summary>see instances</summary>

```solidity
File: contracts/Tokens/Prime/Prime.sol

204             for (uint256 i = 0; i < users.length; ) {
205                 address user = users[i];
206     
207                 if (!tokens[user].exists) revert UserHasNoPrimeToken();
208                 if (isScoreUpdated[nextScoreUpdateRoundId][user]) continue;
209     
210                 address[] storage _allMarkets = allMarkets;
211                 for (uint256 j = 0; j < _allMarkets.length; ) {
212                     address market = _allMarkets[j];
213                     _executeBoost(user, market);
214                     _updateScore(user, market);
215     
216                     unchecked {
217                         j++;
218                     }
219                 }
220     
221                 pendingScoreUpdates--;
222                 isScoreUpdated[nextScoreUpdateRoundId][user] = true;
223     
224                 unchecked {
225                     i++;
226                 }
227     
228                 emit UserScoreUpdated(user);
229             }

335                 for (uint256 i = 0; i < users.length; ) {
336                     Token storage userToken = tokens[users[i]];
337                     if (userToken.exists && !userToken.isIrrevocable) {
338                         _upgrade(users[i]);
339                     } else {
340                         _mint(true, users[i]);
341                         _initializeMarkets(users[i]);
342                     }
343     
344                     unchecked {
345                         i++;
346                     }
347                 }

349                 for (uint256 i = 0; i < users.length; ) {
350                     _mint(false, users[i]);
351                     _initializeMarkets(users[i]);
352                     delete stakedAt[users[i]];
353     
354                     unchecked {
355                         i++;
356                     }
357                 }

```
*GitHub*: [[204](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L204-L229), [335](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L335-L347), [349](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L349-L357)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

103             for (uint256 i; i < numTokens; ) {
104                 _initializeToken(tokens_[i]);
105                 _setTokenDistributionSpeed(tokens_[i], distributionSpeeds_[i]);
106     
107                 unchecked {
108                     ++i;
109                 }
110             }

119             for (uint256 i; i < tokens_.length; ) {
120                 _initializeToken(tokens_[i]);
121     
122                 unchecked {
123                     ++i;
124                 }
125             }

161             for (uint256 i; i < numTokens; ) {
162                 _ensureTokenInitialized(tokens_[i]);
163                 _setTokenDistributionSpeed(tokens_[i], distributionSpeeds_[i]);
164     
165                 unchecked {
166                     ++i;
167                 }
168             }

```
*GitHub*: [[103](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L103-L110), [119](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L119-L125), [161](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L161-L168)]


</details>


### [N&#x2011;46] Non-`external`/`public` function names should begin with an underscore
According to the Solidity Style Guide, Non-`external`/`public` function names should begin with an [underscore](https://docs.soliditylang.org/en/latest/style-guide.html#underscore-prefix-for-non-external-functions-and-variables)

*There are 9 instances of this issue:*

<details>

<summary>see instances</summary>

```solidity
File: contracts/Tokens/Prime/Prime.sol

904         function isEligible(uint256 amount) internal view returns (bool) {

```
*GitHub*: [[904](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L904-L904)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath.sol

22        function toFixed(uint256 n, uint256 d) internal pure returns (int256) {

34        function uintDiv(uint256 u, int256 f) internal pure returns (uint256) {

46        function uintMul(uint256 u, int256 f) internal pure returns (uint256) {

53        function ln(int256 x) internal pure returns (int256 r) {

58        function exp(int256 x) internal pure returns (int256 r) {

```
*GitHub*: [[22](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol#L22-L22), [34](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol#L34-L34), [46](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol#L46-L46), [53](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol#L53-L53), [58](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol#L58-L58)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath0x.sol

51        function ln(int256 x) internal pure returns (int256 r) {

140         function exp(int256 x) internal pure returns (int256 r) {

```
*GitHub*: [[51](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L51-L51), [140](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L140-L140)]


```solidity
File: contracts/Tokens/Prime/libs/Scores.sol

22        function calculateScore(
23            uint256 xvs,
24            uint256 capital,
25            uint256 alphaNumerator,
26            uint256 alphaDenominator
27        ) internal pure returns (uint256) {

```
*GitHub*: [[22](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L22-L27)]


</details>


### [N&#x2011;47] Non-`external`/`public` variable names should begin with an underscore
According to the Solidity Style Guide, Non-`external`/`public` variable names should begin with an [underscore](https://docs.soliditylang.org/en/latest/style-guide.html#underscore-prefix-for-non-external-functions-and-variables)

*There are 4 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/PrimeStorage.sol

70        address[] internal allMarkets;

79        address internal xvsVault;

82        address internal xvsVaultRewardToken;

85        uint256 internal xvsVaultPoolId;

```
*GitHub*: [[70](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L70-L70), [79](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L79-L79), [82](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L82-L82), [85](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L85-L85)]



### [N&#x2011;48] Event is not properly `indexed`
Index event fields make the field more quickly accessible [to off-chain tools](https://ethereum.stackexchange.com/questions/40396/can-somebody-please-explain-the-concept-of-event-indexing) that parse events. This is especially useful when it comes to filtering based on an address. However, note that each index field costs extra gas during emission, so it's not necessarily best to index the maximum allowed per event (three fields). Where applicable, each `event` should use three `indexed` fields if there are three or more fields, and gas usage is not particularly of concern for the events in question. If there are fewer than three applicable fields, all of the applicable fields should be indexed.

*There is one instance of this issue:*
```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

36        event PrimeTokenUpdated(address oldPrimeToken, address newPrimeToken);

```
*GitHub*: [[36](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L36-L36)]



### [N&#x2011;49] Unused `event` definition
Note that there may be cases where an event superficially appears to be used, but this is only because there are multiple definitions of the event in different files. In such cases, the event definition should be moved into a separate file. The instances below are the unused definitions.

*There are 3 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

48        event TokenInitialBalanceUpdated(address indexed token, uint256 balance);

51        event FundsTransferPaused();

54        event FundsTransferResumed();

```
*GitHub*: [[48](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L48-L48), [51](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L51-L51), [54](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L54-L54)]



### [N&#x2011;50] `constant`s should be defined rather than using magic numbers
Even [assembly](https://github.com/code-423n4/2022-05-opensea-seaport/blob/9d7ce4d08bf3c3010304a0476a785c70c0e90ae7/contracts/lib/TokenTransferrer.sol#L35-L39) can benefit from using readable constants instead of hex/numeric literals

*There are 91 instances of this issue:*

<details>

<summary>see instances</summary>

```solidity
File: contracts/Tokens/Prime/libs/FixedMath0x.sol

// @audit 0x00000000000000000000000000000000000000000001c8464f76164760000000
73            if (x <= int256(0x00000000000000000000000000000000000000000001c8464f76164760000000)) {

// @audit 0x0000000000000000000000000000001000000000000000000000000000000000
74                r -= int256(0x0000000000000000000000000000001000000000000000000000000000000000); // - 32

// @audit 0x00000000000000000000000000000000000000000001c8464f76164760000000
75                x = (x * FIXED_1) / int256(0x00000000000000000000000000000000000000000001c8464f76164760000000); // / e ^ -32

// @audit 0x00000000000000000000000000000000000000f1aaddd7742e90000000000000
78            if (x <= int256(0x00000000000000000000000000000000000000f1aaddd7742e90000000000000)) {

// @audit 0x0000000000000000000000000000000800000000000000000000000000000000
79                r -= int256(0x0000000000000000000000000000000800000000000000000000000000000000); // - 16

// @audit 0x00000000000000000000000000000000000000f1aaddd7742e90000000000000
80                x = (x * FIXED_1) / int256(0x00000000000000000000000000000000000000f1aaddd7742e90000000000000); // / e ^ -16

// @audit 0x00000000000000000000000000000000000afe10820813d78000000000000000
83            if (x <= int256(0x00000000000000000000000000000000000afe10820813d78000000000000000)) {

// @audit 0x0000000000000000000000000000000400000000000000000000000000000000
84                r -= int256(0x0000000000000000000000000000000400000000000000000000000000000000); // - 8

// @audit 0x00000000000000000000000000000000000afe10820813d78000000000000000
85                x = (x * FIXED_1) / int256(0x00000000000000000000000000000000000afe10820813d78000000000000000); // / e ^ -8

// @audit 0x0000000000000000000000000000000002582ab704279ec00000000000000000
88            if (x <= int256(0x0000000000000000000000000000000002582ab704279ec00000000000000000)) {

// @audit 0x0000000000000000000000000000000200000000000000000000000000000000
89                r -= int256(0x0000000000000000000000000000000200000000000000000000000000000000); // - 4

// @audit 0x0000000000000000000000000000000002582ab704279ec00000000000000000
90                x = (x * FIXED_1) / int256(0x0000000000000000000000000000000002582ab704279ec00000000000000000); // / e ^ -4

// @audit 0x000000000000000000000000000000001152aaa3bf81cc000000000000000000
93            if (x <= int256(0x000000000000000000000000000000001152aaa3bf81cc000000000000000000)) {

// @audit 0x0000000000000000000000000000000100000000000000000000000000000000
94                r -= int256(0x0000000000000000000000000000000100000000000000000000000000000000); // - 2

// @audit 0x000000000000000000000000000000001152aaa3bf81cc000000000000000000
95                x = (x * FIXED_1) / int256(0x000000000000000000000000000000001152aaa3bf81cc000000000000000000); // / e ^ -2

// @audit 0x000000000000000000000000000000002f16ac6c59de70000000000000000000
98            if (x <= int256(0x000000000000000000000000000000002f16ac6c59de70000000000000000000)) {

// @audit 0x0000000000000000000000000000000080000000000000000000000000000000
99                r -= int256(0x0000000000000000000000000000000080000000000000000000000000000000); // - 1

// @audit 0x000000000000000000000000000000002f16ac6c59de70000000000000000000
100                 x = (x * FIXED_1) / int256(0x000000000000000000000000000000002f16ac6c59de70000000000000000000); // / e ^ -1

// @audit 0x000000000000000000000000000000004da2cbf1be5828000000000000000000
103             if (x <= int256(0x000000000000000000000000000000004da2cbf1be5828000000000000000000)) {

// @audit 0x0000000000000000000000000000000040000000000000000000000000000000
104                 r -= int256(0x0000000000000000000000000000000040000000000000000000000000000000); // - 0.5

// @audit 0x000000000000000000000000000000004da2cbf1be5828000000000000000000
105                 x = (x * FIXED_1) / int256(0x000000000000000000000000000000004da2cbf1be5828000000000000000000); // / e ^ -0.5

// @audit 0x0000000000000000000000000000000063afbe7ab2082c000000000000000000
108             if (x <= int256(0x0000000000000000000000000000000063afbe7ab2082c000000000000000000)) {

// @audit 0x0000000000000000000000000000000020000000000000000000000000000000
109                 r -= int256(0x0000000000000000000000000000000020000000000000000000000000000000); // - 0.25

// @audit 0x0000000000000000000000000000000063afbe7ab2082c000000000000000000
110                 x = (x * FIXED_1) / int256(0x0000000000000000000000000000000063afbe7ab2082c000000000000000000); // / e ^ -0.25

// @audit 0x0000000000000000000000000000000070f5a893b608861e1f58934f97aea57d
113             if (x <= int256(0x0000000000000000000000000000000070f5a893b608861e1f58934f97aea57d)) {

// @audit 0x0000000000000000000000000000000010000000000000000000000000000000
114                 r -= int256(0x0000000000000000000000000000000010000000000000000000000000000000); // - 0.125

// @audit 0x0000000000000000000000000000000070f5a893b608861e1f58934f97aea57d
115                 x = (x * FIXED_1) / int256(0x0000000000000000000000000000000070f5a893b608861e1f58934f97aea57d); // / e ^ -0.125

// @audit 0x100000000000000000000000000000000
122             r += (z * (0x100000000000000000000000000000000 - y)) / 0x100000000000000000000000000000000;

// @audit 0x0aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
// @audit 0x200000000000000000000000000000000
124             r += (z * (0x0aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa - y)) / 0x200000000000000000000000000000000;

// @audit 0x099999999999999999999999999999999
// @audit 0x300000000000000000000000000000000
126             r += (z * (0x099999999999999999999999999999999 - y)) / 0x300000000000000000000000000000000;

// @audit 0x092492492492492492492492492492492
// @audit 0x400000000000000000000000000000000
128             r += (z * (0x092492492492492492492492492492492 - y)) / 0x400000000000000000000000000000000;

// @audit 0x08e38e38e38e38e38e38e38e38e38e38e
// @audit 0x500000000000000000000000000000000
130             r += (z * (0x08e38e38e38e38e38e38e38e38e38e38e - y)) / 0x500000000000000000000000000000000;

// @audit 0x08ba2e8ba2e8ba2e8ba2e8ba2e8ba2e8b
// @audit 0x600000000000000000000000000000000
132             r += (z * (0x08ba2e8ba2e8ba2e8ba2e8ba2e8ba2e8b - y)) / 0x600000000000000000000000000000000;

// @audit 0x089d89d89d89d89d89d89d89d89d89d89
// @audit 0x700000000000000000000000000000000
134             r += (z * (0x089d89d89d89d89d89d89d89d89d89d89 - y)) / 0x700000000000000000000000000000000;

// @audit 0x088888888888888888888888888888888
// @audit 0x800000000000000000000000000000000
136             r += (z * (0x088888888888888888888888888888888 - y)) / 0x800000000000000000000000000000000; // add y^15 / 15 - y^16 / 16

// @audit 0x0000000000000000000000000000000010000000000000000000000000000000
162             z = y = x % 0x0000000000000000000000000000000010000000000000000000000000000000;

// @audit 0x10e1b3be415a0000
164             r += z * 0x10e1b3be415a0000; // add y^02 * (20! / 02!)

// @audit 0x05a0913f6b1e0000
166             r += z * 0x05a0913f6b1e0000; // add y^03 * (20! / 03!)

// @audit 0x0168244fdac78000
168             r += z * 0x0168244fdac78000; // add y^04 * (20! / 04!)

// @audit 0x004807432bc18000
170             r += z * 0x004807432bc18000; // add y^05 * (20! / 05!)

// @audit 0x000c0135dca04000
172             r += z * 0x000c0135dca04000; // add y^06 * (20! / 06!)

// @audit 0x0001b707b1cdc000
174             r += z * 0x0001b707b1cdc000; // add y^07 * (20! / 07!)

// @audit 0x000036e0f639b800
176             r += z * 0x000036e0f639b800; // add y^08 * (20! / 08!)

// @audit 0x00000618fee9f800
178             r += z * 0x00000618fee9f800; // add y^09 * (20! / 09!)

// @audit 0x0000009c197dcc00
180             r += z * 0x0000009c197dcc00; // add y^10 * (20! / 10!)

// @audit 0x0000000e30dce400
182             r += z * 0x0000000e30dce400; // add y^11 * (20! / 11!)

// @audit 0x000000012ebd1300
184             r += z * 0x000000012ebd1300; // add y^12 * (20! / 12!)

// @audit 0x0000000017499f00
186             r += z * 0x0000000017499f00; // add y^13 * (20! / 13!)

// @audit 0x0000000001a9d480
188             r += z * 0x0000000001a9d480; // add y^14 * (20! / 14!)

// @audit 0x00000000001c6380
190             r += z * 0x00000000001c6380; // add y^15 * (20! / 15!)

// @audit 0x000000000001c638
192             r += z * 0x000000000001c638; // add y^16 * (20! / 16!)

// @audit 0x0000000000001ab8
194             r += z * 0x0000000000001ab8; // add y^17 * (20! / 17!)

// @audit 0x000000000000017c
196             r += z * 0x000000000000017c; // add y^18 * (20! / 18!)

// @audit 0x0000000000000014
198             r += z * 0x0000000000000014; // add y^19 * (20! / 19!)

// @audit 0x0000000000000001
200             r += z * 0x0000000000000001; // add y^20 * (20! / 20!)

// @audit 0x21c3677c82b40000
201             r = r / 0x21c3677c82b40000 + y + FIXED_1; // divide by 20! and then add y^1 / 1! + y^0 / 0!

// @audit 0x0000000000000000000000000000001000000000000000000000000000000000
206             if ((x & int256(0x0000000000000000000000000000001000000000000000000000000000000000)) != 0) {

// @audit 0x00000000000000000000000000000000000000f1aaddd7742e56d32fb9f99744
208                     (r * int256(0x00000000000000000000000000000000000000f1aaddd7742e56d32fb9f99744)) /

// @audit 0x0000000000000000000000000043cbaf42a000812488fc5c220ad7b97bf6e99e
209                     int256(0x0000000000000000000000000043cbaf42a000812488fc5c220ad7b97bf6e99e); // * e ^ -32

// @audit 0x0000000000000000000000000000000800000000000000000000000000000000
212             if ((x & int256(0x0000000000000000000000000000000800000000000000000000000000000000)) != 0) {

// @audit 0x00000000000000000000000000000000000afe10820813d65dfe6a33c07f738f
214                     (r * int256(0x00000000000000000000000000000000000afe10820813d65dfe6a33c07f738f)) /

// @audit 0x000000000000000000000000000005d27a9f51c31b7c2f8038212a0574779991
215                     int256(0x000000000000000000000000000005d27a9f51c31b7c2f8038212a0574779991); // * e ^ -16

// @audit 0x0000000000000000000000000000000400000000000000000000000000000000
218             if ((x & int256(0x0000000000000000000000000000000400000000000000000000000000000000)) != 0) {

// @audit 0x0000000000000000000000000000000002582ab704279e8efd15e0265855c47a
220                     (r * int256(0x0000000000000000000000000000000002582ab704279e8efd15e0265855c47a)) /

// @audit 0x0000000000000000000000000000001b4c902e273a58678d6d3bfdb93db96d02
221                     int256(0x0000000000000000000000000000001b4c902e273a58678d6d3bfdb93db96d02); // * e ^ -8

// @audit 0x0000000000000000000000000000000200000000000000000000000000000000
224             if ((x & int256(0x0000000000000000000000000000000200000000000000000000000000000000)) != 0) {

// @audit 0x000000000000000000000000000000001152aaa3bf81cb9fdb76eae12d029571
226                     (r * int256(0x000000000000000000000000000000001152aaa3bf81cb9fdb76eae12d029571)) /

// @audit 0x00000000000000000000000000000003b1cc971a9bb5b9867477440d6d157750
227                     int256(0x00000000000000000000000000000003b1cc971a9bb5b9867477440d6d157750); // * e ^ -4

// @audit 0x0000000000000000000000000000000100000000000000000000000000000000
230             if ((x & int256(0x0000000000000000000000000000000100000000000000000000000000000000)) != 0) {

// @audit 0x000000000000000000000000000000002f16ac6c59de6f8d5d6f63c1482a7c86
232                     (r * int256(0x000000000000000000000000000000002f16ac6c59de6f8d5d6f63c1482a7c86)) /

// @audit 0x000000000000000000000000000000015bf0a8b1457695355fb8ac404e7a79e3
233                     int256(0x000000000000000000000000000000015bf0a8b1457695355fb8ac404e7a79e3); // * e ^ -2

// @audit 0x0000000000000000000000000000000080000000000000000000000000000000
236             if ((x & int256(0x0000000000000000000000000000000080000000000000000000000000000000)) != 0) {

// @audit 0x000000000000000000000000000000004da2cbf1be5827f9eb3ad1aa9866ebb3
238                     (r * int256(0x000000000000000000000000000000004da2cbf1be5827f9eb3ad1aa9866ebb3)) /

// @audit 0x00000000000000000000000000000000d3094c70f034de4b96ff7d5b6f99fcd8
239                     int256(0x00000000000000000000000000000000d3094c70f034de4b96ff7d5b6f99fcd8); // * e ^ -1

// @audit 0x0000000000000000000000000000000040000000000000000000000000000000
242             if ((x & int256(0x0000000000000000000000000000000040000000000000000000000000000000)) != 0) {

// @audit 0x0000000000000000000000000000000063afbe7ab2082ba1a0ae5e4eb1b479dc
244                     (r * int256(0x0000000000000000000000000000000063afbe7ab2082ba1a0ae5e4eb1b479dc)) /

// @audit 0x00000000000000000000000000000000a45af1e1f40c333b3de1db4dd55f29a7
245                     int256(0x00000000000000000000000000000000a45af1e1f40c333b3de1db4dd55f29a7); // * e ^ -0.5

// @audit 0x0000000000000000000000000000000020000000000000000000000000000000
248             if ((x & int256(0x0000000000000000000000000000000020000000000000000000000000000000)) != 0) {

// @audit 0x0000000000000000000000000000000070f5a893b608861e1f58934f97aea57d
250                     (r * int256(0x0000000000000000000000000000000070f5a893b608861e1f58934f97aea57d)) /

// @audit 0x00000000000000000000000000000000910b022db7ae67ce76b441c27035c6a1
251                     int256(0x00000000000000000000000000000000910b022db7ae67ce76b441c27035c6a1); // * e ^ -0.25

// @audit 0x0000000000000000000000000000000010000000000000000000000000000000
254             if ((x & int256(0x0000000000000000000000000000000010000000000000000000000000000000)) != 0) {

// @audit 0x00000000000000000000000000000000783eafef1c0a8f3978c7f81824d62ebf
256                     (r * int256(0x00000000000000000000000000000000783eafef1c0a8f3978c7f81824d62ebf)) /

// @audit 0x0000000000000000000000000000000088415abbe9a76bead8d00cf112e4d4a8
257                     int256(0x0000000000000000000000000000000088415abbe9a76bead8d00cf112e4d4a8); // * e ^ -0.125

```
*GitHub*: [[73](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L73-L73), [74](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L74-L74), [75](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L75-L75), [78](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L78-L78), [79](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L79-L79), [80](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L80-L80), [83](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L83-L83), [84](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L84-L84), [85](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L85-L85), [88](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L88-L88), [89](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L89-L89), [90](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L90-L90), [93](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L93-L93), [94](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L94-L94), [95](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L95-L95), [98](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L98-L98), [99](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L99-L99), [100](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L100-L100), [103](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L103-L103), [104](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L104-L104), [105](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L105-L105), [108](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L108-L108), [109](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L109-L109), [110](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L110-L110), [113](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L113-L113), [114](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L114-L114), [115](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L115-L115), [122](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L122-L122), [122](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L122-L122), [124](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L124-L124), [124](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L124-L124), [126](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L126-L126), [126](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L126-L126), [128](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L128-L128), [128](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L128-L128), [130](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L130-L130), [130](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L130-L130), [132](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L132-L132), [132](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L132-L132), [134](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L134-L134), [134](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L134-L134), [136](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L136-L136), [136](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L136-L136), [162](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L162-L162), [164](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L164-L164), [166](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L166-L166), [168](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L168-L168), [170](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L170-L170), [172](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L172-L172), [174](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L174-L174), [176](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L176-L176), [178](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L178-L178), [180](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L180-L180), [182](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L182-L182), [184](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L184-L184), [186](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L186-L186), [188](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L188-L188), [190](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L190-L190), [192](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L192-L192), [194](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L194-L194), [196](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L196-L196), [198](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L198-L198), [200](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L200-L200), [201](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L201-L201), [206](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L206-L206), [208](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L208-L208), [209](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L209-L209), [212](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L212-L212), [214](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L214-L214), [215](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L215-L215), [218](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L218-L218), [220](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L220-L220), [221](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L221-L221), [224](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L224-L224), [226](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L226-L226), [227](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L227-L227), [230](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L230-L230), [232](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L232-L232), [233](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L233-L233), [236](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L236-L236), [238](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L238-L238), [239](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L239-L239), [242](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L242-L242), [244](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L244-L244), [245](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L245-L245), [248](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L248-L248), [250](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L250-L250), [251](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L251-L251), [254](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L254-L254), [256](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L256-L256), [257](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L257-L257)]


</details>


### [N&#x2011;51] Consider using named mappings
Consider moving to solidity version 0.8.18 or later, and using [named mappings](https://ethereum.stackexchange.com/a/145555) to make it easier to understand the purpose of each mapping

*There are 11 instances of this issue:*

<details>

<summary>see instances</summary>

```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

21        mapping(address => uint256) public tokenDistributionSpeeds;

24        mapping(address => uint256) public lastAccruedBlock;

27        mapping(address => uint256) public tokenAmountAccrued;

```
*GitHub*: [[21](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L21-L21), [24](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L24-L24), [27](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L27-L27)]


```solidity
File: contracts/Tokens/Prime/PrimeStorage.sol

46        mapping(address => Token) public tokens;

61        mapping(address => uint256) public stakedAt;

64        mapping(address => Market) public markets;

67        mapping(address => mapping(address => Interest)) public interests;

88        mapping(uint256 => mapping(address => bool)) public isScoreUpdated;

100         mapping(address => address) public vTokenForAsset;

110         mapping(address => uint256) public unreleasedPSRIncome;

114         mapping(address => uint256) public unreleasedPLPIncome;

```
*GitHub*: [[46](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L46-L46), [61](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L61-L61), [64](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L64-L64), [67](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L67-L67), [88](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L88-L88), [100](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L100-L100), [110](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L110-L110), [114](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L114-L114)]


</details>


### [N&#x2011;52] Vulnerable versions of packages are being used
This project is using specific package versions which are vulnerable to the specific CVEs listed below. Consider switching to more recent versions of these packages that don't have these vulnerabilities.

*There are 3 instances of this issue:*

[CVE-2023-40014](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-40014) - **MEDIUM** - (`@openzeppelin/contracts >=4.0.0 <4.9.3`): OpenZeppelin Contracts is a library for secure smart contract development. Starting in version 4.0.0 and prior to version 4.9.3, contracts using `ERC2771Context` along with a custom trusted forwarder may see `_msgSender` return `address(0)` in calls that originate from the forwarder with calldata shorter than 20 bytes. This combination of circumstances does not appear to be common, in particular it is not the case for `MinimalForwarder` from OpenZeppelin Contracts, or any deployed forwarder the team is aware of, given that the signer address is appended to all calls that originate from these forwarders. The problem has been patched in v4.9.3.

[CVE-2023-34459](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-34459) - **MEDIUM** - (`@openzeppelin/contracts >=4.7.0 <4.9.2`): OpenZeppelin Contracts is a library for smart contract development. Starting in version 4.7.0 and prior to version 4.9.2, when the `verifyMultiProof`, `verifyMultiProofCalldata`, `procesprocessMultiProof`, or `processMultiProofCalldat` functions are in use, it is possible to construct merkle trees that allow forging a valid multiproof for an arbitrary set of leaves. A contract may be vulnerable if it uses multiproofs for verification and the merkle tree that is processed includes a node with value 0 at depth 1 (just under the root). This could happen inadvertedly for balanced trees with 3 leaves or less, if the leaves are not hashed. This could happen deliberately if a malicious tree builder includes such a node in the tree. A contract is not vulnerable if it uses single-leaf proving (`verify`, `verifyCalldata`, `processProof`, or `processProofCalldata`), or if it uses multiproofs with a known tree that has hashed leaves. Standard merkle trees produced or validated with the @openzeppelin/merkle-tree library are safe. The problem has been patched in version 4.9.2. Some workarounds are available. For those using multiproofs: When constructing merkle trees hash the leaves and do not insert empty nodes in your trees. Using the @openzeppelin/merkle-tree package eliminates this issue. Do not accept user-provided merkle roots without reconstructing at least the first level of the tree. Verify the merkle tree structure by reconstructing it from the leaves.

[CVE-2023-34234](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-34234) - **MEDIUM** - (`@openzeppelin/contracts >=4.3.0 <4.9.1`): OpenZeppelin Contracts is a library for smart contract development. By frontrunning the creation of a proposal, an attacker can become the proposer and gain the ability to cancel it. The attacker can do this repeatedly to try to prevent a proposal from being proposed at all. This impacts the `Governor` contract in v4.9.0 only, and the `GovernorCompatibilityBravo` contract since v4.3.0. This problem has been patched in 4.9.1 by introducing opt-in frontrunning protection. Users are advised to upgrade. Users unable to upgrade may submit the proposal creation transaction to an endpoint with frontrunning protection as a workaround.



## Gas Optimizations


Gas totals use lower bounds of ranges and count two iterations of each `for`-loop. All values above are runtime, not deployment, values; deployment values are listed in the individual issue descriptions. The table above as well as its gas numbers do not include any of the excluded findings.
### [G&#x2011;01] Use assembly to check for `address(0)`
A simple zero address check can be written in assembly to save some gas.

*There are 10 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

104             if (_wbnb == address(0)) revert InvalidAddress();

105             if (_vbnb == address(0)) revert InvalidAddress();

143             if (_xvsVault == address(0)) revert InvalidAddress();

144             if (_xvsVaultRewardToken == address(0)) revert InvalidAddress();

145             if (_protocolShareReserve == address(0)) revert InvalidAddress();

146             if (_comptroller == address(0)) revert InvalidAddress();

147             if (_oracle == address(0)) revert InvalidAddress();

148             if (_primeLiquidityProvider == address(0)) revert InvalidAddress();

457             if (vToken == address(0)) revert MarketNotSupported();

```
*GitHub*: [[104](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L104-L104), [105](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L105-L105), [143](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L143-L143), [144](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L144-L144), [145](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L145-L145), [146](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L146-L146), [147](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L147-L147), [148](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L148-L148), [457](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L457-L457)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

345             if (address_ == address(0)) {

```
*GitHub*: [[345](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L345-L345)]



### [G&#x2011;02] Use assembly to emit events, in order to save gas
To efficiently emit events, it's possible to utilize assembly by making use of scratch space and the free memory pointer. This approach has the advantage of potentially avoiding the costs associated with memory expansion.

However, it's important to note that in order to safely optimize this process, it is preferable to cache and restore the free memory pointer.

A good example of such practice can be seen in [Solady's](https://github.com/Vectorized/solady/blob/main/src/tokens/ERC1155.sol#L167) codebase.

*There are 15 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

228                 emit UserScoreUpdated(user);

241             emit AlphaUpdated(alphaNumerator, alphaDenominator, _alphaNumerator, _alphaDenominator);

308             emit MarketAdded(vToken, supplyMultiplier, borrowMultiplier);

320             emit MintLimitsUpdated(irrevocableLimit, revocableLimit, _irrevocableLimit, _revocableLimit);

462             emit UpdatedAssetsState(comptroller, asset);

694             emit InterestClaimed(user, vToken, amount);

718             emit Mint(user, isIrrevocable);

755             emit Burn(user);

771             emit TokenUpgraded(user);

```
*GitHub*: [[228](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L228-L228), [241](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L241-L241), [308](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L308-L308), [320](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L320-L320), [462](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L462-L462), [694](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L694-L694), [718](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L718-L718), [755](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L755-L755), [771](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L771-L771)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

180             emit PrimeTokenUpdated(prime, prime_);

202             emit TokenTransferredToPrime(token_, accruedAmount);

222             emit SweepToken(address(token_), to_, amount_);

267                     emit TokensAccrued(token_, tokenAccrued);

300             emit TokenDistributionInitialized(token_);

324                 emit TokenDistributionSpeedUpdated(token_, distributionSpeed_);

```
*GitHub*: [[180](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L180-L180), [202](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L202-L202), [222](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L222-L222), [267](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L267-L267), [300](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L300-L300), [324](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L324-L324)]



### [G&#x2011;03] Use assembly to write address/contract type storage values
Using `assembly { sstore(state.slot, addr)` instead of `state = addr` can save gas.

*There are 9 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

107             WBNB = _wbnb;

108             VBNB = _vbnb;

153             xvsVaultRewardToken = _xvsVaultRewardToken;

155             xvsVault = _xvsVault;

157             protocolShareReserve = _protocolShareReserve;

158             primeLiquidityProvider = _primeLiquidityProvider;

159             comptroller = _comptroller;

160             oracle = ResilientOracleInterface(_oracle);

```
*GitHub*: [[107](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L107-L107), [108](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L108-L108), [153](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L153-L153), [155](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L155-L155), [157](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L157-L157), [158](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L158-L158), [159](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L159-L159), [160](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L160-L160)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

181             prime = prime_;

```
*GitHub*: [[181](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L181-L181)]



### [G&#x2011;04] Use assembly to check zero
Using assembly to check for zero can save gas by allowing more direct access to the evm and reducing some of the overhead associated with high-level operations in solidity.

*There are 25 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

106             if (_blocksPerYear == 0) revert InvalidBlocksPerYear();

201             if (pendingScoreUpdates == 0) revert NoScoreUpdatesRequired();

202             if (nextScoreUpdateRoundId == 0) revert NoScoreUpdatesRequired();

377             } else if (stakedAt[user] == 0 && isAccountEligible && !tokens[user].exists) {

398             if (stakedAt[msg.sender] == 0) revert IneligibleToClaim();

479             if (stakedAt[user] == 0) return STAKING_PERIOD;

576             if (distributionIncome == 0) {

810             if (_alphaDenominator == 0 || _alphaNumerator > _alphaDenominator) {

1002              if (totalScore == 0) return (0, 0);

1007              if (totalCappedValue == 0) return (0, 0);

1012              supplyAPR = totalSupply == 0 ? 0 : ((userSupplyIncomeYearly * MAXIMUM_BPS) / totalSupply);

1013              borrowAPR = totalBorrow == 0 ? 0 : ((userBorrowIncomeYearly * MAXIMUM_BPS) / totalBorrow);

```
*GitHub*: [[106](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L106-L106), [201](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L201-L201), [202](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L202-L202), [377](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L377-L377), [398](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L398-L398), [479](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L479-L479), [576](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L576-L576), [810](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L810-L810), [1002](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L1002-L1002), [1007](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L1007-L1007), [1012](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L1012-L1012), [1013](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L1013-L1013)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

335             if (lastBlockAccrued == 0) {

```
*GitHub*: [[335](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L335-L335)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath0x.sol

145             if (x == 0) {

206             if ((x & int256(0x0000000000000000000000000000001000000000000000000000000000000000)) != 0) {

212             if ((x & int256(0x0000000000000000000000000000000800000000000000000000000000000000)) != 0) {

218             if ((x & int256(0x0000000000000000000000000000000400000000000000000000000000000000)) != 0) {

224             if ((x & int256(0x0000000000000000000000000000000200000000000000000000000000000000)) != 0) {

230             if ((x & int256(0x0000000000000000000000000000000100000000000000000000000000000000)) != 0) {

236             if ((x & int256(0x0000000000000000000000000000000080000000000000000000000000000000)) != 0) {

242             if ((x & int256(0x0000000000000000000000000000000040000000000000000000000000000000)) != 0) {

248             if ((x & int256(0x0000000000000000000000000000000020000000000000000000000000000000)) != 0) {

254             if ((x & int256(0x0000000000000000000000000000000010000000000000000000000000000000)) != 0) {

```
*GitHub*: [[145](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L145-L145), [206](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L206-L206), [212](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L212-L212), [218](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L218-L218), [224](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L224-L224), [230](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L230-L230), [236](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L236-L236), [242](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L242-L242), [248](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L248-L248), [254](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L254-L254)]


```solidity
File: contracts/Tokens/Prime/libs/Scores.sol

43            // If any side is 0, exit early

```
*GitHub*: [[43](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L43-L43), [43](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L43-L44)]



### [G&#x2011;05] Avoid updating storage when the value hasn't changed
If the old value is equal to the new value, not re-storing the value will avoid a Gsreset (**2900 gas**), potentially at the expense of a Gcoldsload (**2100 gas**) or a Gwarmaccess (**100 gas**)

*There is one instance of this issue:*
```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

181             prime = prime_;

```
*GitHub*: [[181](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L181-L181)]



### [G&#x2011;06] State variables should be cached in stack variables rather than re-reading them from storage
The instances below point to the second+ access of a state variable within a function. Caching of a state variable replaces each Gwarmaccess (**100 gas**) with a much cheaper stack read. Other less obvious fixes/optimizations include having local memory caches of state variable structs, or having local caches of state variable contracts/addresses.

*There are 29 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

// @audit `pendingScoreUpdates` accessed 2 times at lines: 201, 221
221                 pendingScoreUpdates--;

// @audit `markets` accessed 3 times at lines: 265, 271, 272
272                 markets[market].borrowMultiplier,

// @audit `stakedAt` accessed 2 times at lines: 375, 377
377             } else if (stakedAt[user] == 0 && isAccountEligible && !tokens[user].exists) {

// @audit `tokens` accessed 5 times at lines: 369, 370, 375, 377, 379
379             } else if (tokens[user].exists && isAccountEligible) {

// @audit `stakedAt` accessed 2 times at lines: 398, 399
399             if (block.timestamp - stakedAt[msg.sender] < STAKING_PERIOD) revert WaitMoreTime();

// @audit `comptroller` accessed 2 times at lines: 454, 462
462             emit UpdatedAssetsState(comptroller, asset);

// @audit `stakedAt` accessed 2 times at lines: 479, 481
481             uint256 totalTimeStaked = block.timestamp - stakedAt[user];

// @audit `STAKING_PERIOD` accessed 3 times at lines: 479, 482, 483
483                 return STAKING_PERIOD - totalTimeStaked;

// @audit `markets` accessed 4 times at lines: 555, 584, 585, 588
588             markets[vToken].rewardIndex = markets[vToken].rewardIndex + delta;

// @audit `markets` accessed 2 times at lines: 629, 633
633                 markets[market].sumOfMembersScore = markets[market].sumOfMembersScore + score;

// @audit `totalIrrevocable` accessed 2 times at lines: 711, 716
// @audit `totalRevocable` accessed 2 times at lines: 713, 716
716             if (totalIrrevocable > irrevocableLimit || totalRevocable > revocableLimit) revert InvalidLimit();

// @audit `tokens` accessed 2 times at lines: 726, 744
744             if (tokens[user].isIrrevocable) {

// @audit `totalIrrevocable` accessed 2 times at lines: 766, 769
769             if (totalIrrevocable > irrevocableLimit) revert InvalidLimit();

// @audit `markets` accessed 2 times at lines: 780, 786
786             interests[vToken][user].rewardIndex = markets[vToken].rewardIndex;

// @audit `markets` accessed 2 times at lines: 795, 800
800             markets[market].sumOfMembersScore = markets[market].sumOfMembersScore - interests[market][user].score + score;

// @audit `totalScoreUpdatesRequired` accessed 2 times at lines: 828, 828
828             if (totalScoreUpdatesRequired > 0) totalScoreUpdatesRequired--;

// @audit `pendingScoreUpdates` accessed 2 times at lines: 830, 831
831                 pendingScoreUpdates--;

// @audit `MAXIMUM_XVS_CAP` accessed 2 times at lines: 855, 856
856                 return MAXIMUM_XVS_CAP;

// @audit `markets` accessed 2 times at lines: 881, 882
882             uint256 supplyCapUSD = (xvsPrice * ((xvs * markets[market].supplyMultiplier) / EXP_SCALE)) / EXP_SCALE;

// @audit `EXP_SCALE` accessed 6 times at lines: 881, 881, 882, 882, 885, 886
886             uint256 borrowUSD = (tokenPrice * borrow) / EXP_SCALE;

// @audit `interests` accessed 2 times at lines: 919, 920
920             uint256 score = interests[vToken][user].score;

// @audit `EXP_SCALE` accessed 2 times at lines: 949, 950
950                 EXP_SCALE);

// @audit `BLOCKS_PER_YEAR` accessed 2 times at lines: 974, 978
978             amount += BLOCKS_PER_YEAR * totalIncomePerBlockFromPLP;

// @audit `MAXIMUM_BPS` accessed 2 times at lines: 1012, 1013
1013              borrowAPR = totalBorrow == 0 ? 0 : ((userBorrowIncomeYearly * MAXIMUM_BPS) / totalBorrow);

```
*GitHub*: [[221](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L221-L221), [272](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L272-L272), [377](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L377-L377), [379](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L379-L379), [399](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L399-L399), [462](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L462-L462), [481](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L481-L481), [483](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L483-L483), [588](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L588-L588), [633](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L633-L633), [716](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L716-L716), [716](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L716-L716), [744](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L744-L744), [769](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L769-L769), [786](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L786-L786), [800](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L800-L800), [828](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L828-L828), [831](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L831-L831), [856](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L856-L856), [882](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L882-L882), [886](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L886-L886), [920](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L920-L920), [950](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L950-L950), [978](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L978-L978), [1013](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L1013-L1013)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

// @audit `prime` accessed 2 times at lines: 193, 204
204             IERC20Upgradeable(token_).safeTransfer(prime, accruedAmount);

// @audit `MAX_DISTRIBUTION_SPEED` accessed 2 times at lines: 311, 312
312                 revert InvalidDistributionSpeed(distributionSpeed_, MAX_DISTRIBUTION_SPEED);

```
*GitHub*: [[204](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L204-L204), [312](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L312-L312)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath0x.sol

// @audit `FIXED_1` accessed 19 times at lines: 58, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 121, 123, 125, 127, 129, 131, 133, 135
135             z = (z * w) / FIXED_1; // add y^13 / 13 - y^14 / 14

// @audit `FIXED_1` accessed 21 times at lines: 146, 163, 165, 167, 169, 171, 173, 175, 177, 179, 181, 183, 185, 187, 189, 191, 193, 195, 197, 199, 201
201             r = r / 0x21c3677c82b40000 + y + FIXED_1; // divide by 20! and then add y^1 / 1! + y^0 / 0!

```
*GitHub*: [[135](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L135-L135), [201](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L201-L201)]



### [G&#x2011;07] Use `calldata` instead of `memory` for immutable arguments
Mark data types as `calldata` instead of `memory` where possible. This makes it so that the data is not automatically loaded into memory. If the data passed into the function does not need to be changed (like updating values in an array), it can be passed in as `calldata`. The one exception to this is if the argument must later be passed into another function that takes an argument that specifies `memory` storage.

*There is one instance of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

// @audit `users` can be calldata
200         function updateScores(address[] memory users) external {

```
*GitHub*: [[200](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L200-L200)]



### [G&#x2011;08] Avoid contract existence checks by using low level calls
Prior to 0.8.10 the compiler inserted extra code, including EXTCODESIZE (100 gas), to check for contract existence for external function calls. In more recent solidity versions, the compiler will not insert these checks if the external call has a return value. Similar behavior can be achieved in earlier versions by using low-level calls, since low level calls never check for contract existence.

*There are 36 instances of this issue:*

<details>

<summary>see instances</summary>

```solidity
File: contracts/Tokens/Prime/Prime.sol

184                     market: IVToken(market).underlying(),

292             bool isMarketExist = InterfaceComptroller(comptroller).markets(vToken);

498             uint256 borrow = vToken.borrowBalanceStored(user);

499             uint256 exchangeRate = vToken.exchangeRateStored();

500             uint256 balanceOfAccount = vToken.balanceOf(user);

561             uint256 totalIncomeUnreleased = IProtocolShareReserve(protocolShareReserve).getUnreleasedFunds(
562                 comptroller,
563                 IProtocolShareReserve.Schema.SPREAD_PRIME_CORE,
564                 address(this),
565                 underlying
566             );

570             _primeLiquidityProvider.accrueTokens(underlying);

571             uint256 totalAccruedInPLP = _primeLiquidityProvider.tokenAmountAccrued(underlying);

651             uint256 borrow = vToken.borrowBalanceStored(user);

652             uint256 exchangeRate = vToken.exchangeRateStored();

653             uint256 balanceOfAccount = vToken.balanceOf(user);

656             address xvsToken = IXVSVault(xvsVault).xvsAddress();

657             oracle.updateAssetPrice(xvsToken);

658             oracle.updatePrice(market);

661             capital = capital * (10 ** (18 - vToken.decimals()));

682             if (amount > asset.balanceOf(address(this))) {

685                 IProtocolShareReserve(protocolShareReserve).releaseFunds(comptroller, assets);

686                 if (amount > asset.balanceOf(address(this))) {

687                     IPrimeLiquidityProvider(primeLiquidityProvider).releaseFunds(address(asset));

692             asset.safeTransfer(user, amount);

841             (uint256 xvs, , uint256 pendingWithdrawals) = IXVSVault(xvsVault).getUserInfo(
842                 xvsVaultRewardToken,
843                 xvsVaultPoolId,
844                 user
845             );

878             address xvsToken = IXVSVault(xvsVault).xvsAddress();

880             uint256 xvsPrice = oracle.getPrice(xvsToken);

884             uint256 tokenPrice = oracle.getUnderlyingPrice(market);

934                 return IVToken(vToken).underlying();

949             return ((((market.totalBorrows() * market.borrowRatePerBlock()) / EXP_SCALE) * market.reserveFactorMantissa()) /

959                 IProtocolShareReserve(protocolShareReserve).getPercentageDistribution(
960                     address(this),
961                     IProtocolShareReserve.Schema.SPREAD_PRIME_CORE
962                 );

973                 IProtocolShareReserve(protocolShareReserve).MAX_PERCENT();

976             uint256 totalIncomePerBlockFromPLP = IPrimeLiquidityProvider(primeLiquidityProvider)
977                 .getEffectiveDistributionSpeed(_getUnderlying(vToken));

```
*GitHub*: [[184](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L184-L184), [292](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L292-L292), [498](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L498-L498), [499](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L499-L499), [500](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L500-L500), [561](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L561-L566), [570](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L570-L570), [571](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L571-L571), [651](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L651-L651), [652](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L652-L652), [653](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L653-L653), [656](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L656-L656), [657](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L657-L657), [658](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L658-L658), [661](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L661-L661), [682](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L682-L682), [685](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L685-L685), [686](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L686-L686), [687](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L687-L687), [692](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L692-L692), [841](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L841-L845), [878](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L878-L878), [880](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L880-L880), [884](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L884-L884), [934](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L934-L934), [949](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L949-L949), [949](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L949-L949), [949](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L949-L949), [959](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L959-L962), [973](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L973-L973), [976](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L976-L977)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

204             IERC20Upgradeable(token_).safeTransfer(prime, accruedAmount);

217             uint256 balance = token_.balanceOf(address(this));

224             token_.safeTransfer(to_, amount_);

234             uint256 balance = IERC20Upgradeable(token_).balanceOf(address(this));

259                 uint256 balance = IERC20Upgradeable(token_).balanceOf(address(this));

```
*GitHub*: [[204](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L204-L204), [217](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L217-L217), [224](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L224-L224), [234](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L234-L234), [259](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L259-L259)]


</details>


### [G&#x2011;09] Events should be emitted outside of loops
Emitting an event has an overhead of **375 gas**, which will be incurred on every iteration of the loop. It is cheaper to `emit` only [once](https://github.com/ethereum/EIPs/blob/adad5968fd6de29902174e0cb51c8fc3dceb9ab5/EIPS/eip-1155.md?plain=1#L68) after the loop has finished.

*There is one instance of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

228                 emit UserScoreUpdated(user);

```
*GitHub*: [[228](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L228-L228)]



### [G&#x2011;10] The result of function calls should be cached rather than re-calling the function
The function calls in solidity are expensive. If the same result of the same function calls are to be used several times, the result should be cached to reduce the gas consumption of repeated calls.

*There are 7 instances of this issue:*

<details>

<summary>see instances</summary>

```solidity
File: contracts/Tokens/Prime/Prime.sol

// @audit `InvalidAddress()` is called 2 times at lines: 104, 105
103         constructor(address _wbnb, address _vbnb, uint256 _blocksPerYear) {

// @audit `InvalidAddress()` is called 6 times at lines: 143, 144, 145, 146, 147, 148
130         function initialize(
131             address _xvsVault,
132             address _xvsVaultRewardToken,
133             uint256 _xvsVaultPoolId,
134             uint128 _alphaNumerator,
135             uint128 _alphaDenominator,
136             address _accessControlManager,
137             address _protocolShareReserve,
138             address _primeLiquidityProvider,
139             address _comptroller,
140             address _oracle,
141             uint256 _loopsLimit
142         ) external virtual initializer {

// @audit `NoScoreUpdatesRequired()` is called 2 times at lines: 201, 202
200         function updateScores(address[] memory users) external {

// @audit `_initializeMarkets(users[i])` is called 2 times at lines: 341, 351
331         function issue(bool isIrrevocable, address[] calldata users) external {

// @audit `_accrueInterestAndUpdateScore(user)` is called 2 times at lines: 371, 380
365         function xvsUpdated(address user) external {

// @audit `asset.balanceOf(address(this))` is called 2 times at lines: 682, 686
672         function _claimInterest(address vToken, address user) internal returns (uint256) {

```
*GitHub*: [[105](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L105-L105), [148](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L148-L148), [202](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L202-L202), [351](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L351-L351), [380](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L380-L380), [686](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L686-L686)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath.sol

// @audit `n.toInt256()` is called 4 times at lines: 23, 25, 23, 25
22        function toFixed(uint256 n, uint256 d) internal pure returns (int256) {

```
*GitHub*: [[25](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol#L25-L25)]


</details>


### [G&#x2011;11] Operator `>=`/`<=` costs less gas than operator `>`/`<`
The compiler uses opcodes `GT` and `ISZERO` for solidity code that uses `>`, but only requires `LT` for `>=`, [which saves **3 gas**](https://gist.github.com/IllIllI000/3dc79d25acccfa16dee4e83ffdc6ffde). If `<` is being used, the condition can be inverted.


*There are 43 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

178             for (uint256 i = 0; i < _allMarkets.length; ) {

204             for (uint256 i = 0; i < users.length; ) {

211                 for (uint256 j = 0; j < _allMarkets.length; ) {

246             for (uint256 i = 0; i < allMarkets.length; ) {

318             if (_irrevocableLimit < totalIrrevocable || _revocableLimit < totalRevocable) revert InvalidLimit();

335                 for (uint256 i = 0; i < users.length; ) {

349                 for (uint256 i = 0; i < users.length; ) {

375             } else if (!isAccountEligible && !tokens[user].exists && stakedAt[user] > 0) {

399             if (block.timestamp - stakedAt[msg.sender] < STAKING_PERIOD) revert WaitMoreTime();

482             if (totalTimeStaked < STAKING_PERIOD) {

584             if (markets[vToken].sumOfMembersScore > 0) {

609             for (uint256 i = 0; i < _allMarkets.length; ) {

625             for (uint256 i = 0; i < _allMarkets.length; ) {

682             if (amount > asset.balanceOf(address(this))) {

686                 if (amount > asset.balanceOf(address(this))) {

716             if (totalIrrevocable > irrevocableLimit || totalRevocable > revocableLimit) revert InvalidLimit();

730             for (uint256 i = 0; i < _allMarkets.length; ) {

769             if (totalIrrevocable > irrevocableLimit) revert InvalidLimit();

810             if (_alphaDenominator == 0 || _alphaNumerator > _alphaDenominator) {

828             if (totalScoreUpdatesRequired > 0) totalScoreUpdatesRequired--;

830             if (pendingScoreUpdates > 0 && !isScoreUpdated[nextScoreUpdateRoundId][user]) {

855             if (xvs > MAXIMUM_XVS_CAP) {

889                 supply = supplyUSD > 0 ? (supply * supplyCapUSD) / supplyUSD : 0;

893                 borrow = borrowUSD > 0 ? (borrow * borrowCapUSD) / borrowUSD : 0;

```
*GitHub*: [[178](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L178-L178), [204](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L204-L204), [211](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L211-L211), [246](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L246-L246), [318](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L318-L318), [318](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L318-L318), [335](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L335-L335), [349](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L349-L349), [375](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L375-L375), [399](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L399-L399), [482](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L482-L482), [584](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L584-L584), [609](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L609-L609), [625](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L625-L625), [682](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L682-L682), [686](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L686-L686), [716](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L716-L716), [716](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L716-L716), [730](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L730-L730), [769](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L769-L769), [810](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L810-L810), [828](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L828-L828), [830](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L830-L830), [855](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L855-L855), [889](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L889-L889), [893](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L893-L893)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

103             for (uint256 i; i < numTokens; ) {

119             for (uint256 i; i < tokens_.length; ) {

161             for (uint256 i; i < numTokens; ) {

218             if (amount_ > balance) {

237             if (balance - accrued > 0) {

257             if (deltaBlocks > 0) {

262                 if (distributionSpeed > 0 && balanceDiff > 0) {

291             if (initializedBlock > 0) {

311             if (distributionSpeed_ > MAX_DISTRIBUTION_SPEED) {

```
*GitHub*: [[103](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L103-L103), [119](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L119-L119), [161](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L161-L161), [218](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L218-L218), [237](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L237-L237), [257](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L257-L257), [262](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L262-L262), [262](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L262-L262), [291](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L291-L291), [311](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L311-L311)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath.sol

23            if (d.toInt256() < n.toInt256()) revert InvalidFraction(n, d);

35            if (f < 0) revert InvalidFixedPoint();

47            if (f < 0) revert InvalidFixedPoint();

```
*GitHub*: [[23](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol#L23-L23), [35](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol#L35-L35), [47](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol#L47-L47)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath0x.sol

52            if (x > LN_MAX_VAL) {

141             if (x < EXP_MIN_VAL) {

148             if (x > EXP_MAX_VAL) {

```
*GitHub*: [[52](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L52-L52), [141](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L141-L141), [148](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L148-L148)]


```solidity
File: contracts/Tokens/Prime/libs/Scores.sol

50            if (xvs == capital) return xvs;
51    
52            bool lessxvsThanCapital = xvs < capital;

```
*GitHub*: [[50](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L50-L52)]



### [G&#x2011;12] `internal`/`private` functions only called once can be inlined to save gas
Not inlining costs **20 to 40 gas** because of two extra `JUMP` instructions and additional stack operations needed for function calls.


*There are 6 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

762         function _upgrade(address user) internal {

827         function _updateRoundAfterTokenBurned(address user) internal {

904         function isEligible(uint256 amount) internal view returns (bool) {

947         function _incomePerBlock(address vToken) internal view returns (uint256) {

957         function _distributionPercentage() internal view returns (uint256) {

970         function _incomeDistributionYearly(address vToken) internal view returns (uint256 amount) {

```
*GitHub*: [[762](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L762-L762), [827](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L827-L827), [904](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L904-L904), [947](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L947-L947), [957](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L957-L957), [970](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L970-L970)]



### [G&#x2011;13] `<array>.length` should not be looked up in every loop of a `for`-loop
The overheads outlined below are _PER LOOP_, excluding the first loop
* storage arrays incur a Gwarmaccess (**100 gas**)
* memory arrays use `MLOAD` (**3 gas**)
* calldata arrays use `CALLDATALOAD` (**3 gas**)

*There are 10 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

178             for (uint256 i = 0; i < _allMarkets.length; ) {

204             for (uint256 i = 0; i < users.length; ) {

211                 for (uint256 j = 0; j < _allMarkets.length; ) {

246             for (uint256 i = 0; i < allMarkets.length; ) {

335                 for (uint256 i = 0; i < users.length; ) {

349                 for (uint256 i = 0; i < users.length; ) {

609             for (uint256 i = 0; i < _allMarkets.length; ) {

625             for (uint256 i = 0; i < _allMarkets.length; ) {

730             for (uint256 i = 0; i < _allMarkets.length; ) {

```
*GitHub*: [[178](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L178-L178), [204](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L204-L204), [211](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L211-L211), [246](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L246-L246), [335](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L335-L335), [349](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L349-L349), [609](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L609-L609), [625](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L625-L625), [730](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L730-L730)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

119             for (uint256 i; i < tokens_.length; ) {

```
*GitHub*: [[119](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L119-L119)]



### [G&#x2011;14] Using `bool` for storage incurs overhead
Use `uint256(1)` and `uint256(2)` for `true`/`false` to avoid a Gwarmaccess (100 gas), and to avoid Gsset (20000 gas) when changing from `false` to `true`, after having been `true` in the past. See [source](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/58f635312aa21f947cae5f8578638a85aa2519f5/contracts/security/ReentrancyGuard.sol#L23-L27).

*There is one instance of this issue:*
```solidity
File: contracts/Tokens/Prime/PrimeStorage.sol

88        mapping(uint256 => mapping(address => bool)) public isScoreUpdated;

```
*GitHub*: [[88](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L88-L88)]



### [G&#x2011;15] Multiple accesses of the same mapping/array key/index should be cached
The instances below point to the second+ access of a value inside a mapping/array, within a function. Caching a mapping's value in a local `storage` or `calldata` variable when the value is accessed [multiple times](https://gist.github.com/IllIllI000/ec23a57daa30a8f8ca8b9681c8ccefb0), saves **~42 gas per access** due to not having to recalculate the key's keccak256 hash (Gkeccak256 - **30 gas**) and that calculation's associated stack operations. Caching an array's struct avoids recalculating the array offsets into memory/calldata

*There are 39 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

// @audit markets[market] also accessed at 265
271                 markets[market].supplyMultiplier,

// @audit markets[market] also accessed at 265, 271
272                 markets[market].borrowMultiplier,

// @audit markets[market] also accessed at 265, 271, 272
276             markets[market].supplyMultiplier = supplyMultiplier;

// @audit markets[market] also accessed at 265, 271, 272, 276
277             markets[market].borrowMultiplier = borrowMultiplier;

// @audit markets[vToken] also accessed at 290
295             markets[vToken].rewardIndex = 0;

// @audit markets[vToken] also accessed at 290, 295
296             markets[vToken].supplyMultiplier = supplyMultiplier;

// @audit markets[vToken] also accessed at 290, 295, 296
297             markets[vToken].borrowMultiplier = borrowMultiplier;

// @audit markets[vToken] also accessed at 290, 295, 296, 297
298             markets[vToken].sumOfMembersScore = 0;

// @audit markets[vToken] also accessed at 290, 295, 296, 297, 298
299             markets[vToken].exists = true;

// @audit tokens[user] also accessed at 369
370                 if (tokens[user].isIrrevocable) {

// @audit tokens[user] also accessed at 369, 370
375             } else if (!isAccountEligible && !tokens[user].exists && stakedAt[user] > 0) {

// @audit stakedAt[user] also accessed at 375
376                 stakedAt[user] = 0;

// @audit stakedAt[user] also accessed at 375, 376
// @audit tokens[user] also accessed at 369, 370, 375
377             } else if (stakedAt[user] == 0 && isAccountEligible && !tokens[user].exists) {

// @audit stakedAt[user] also accessed at 375, 376, 377
378                 stakedAt[user] = block.timestamp;

// @audit tokens[user] also accessed at 369, 370, 375, 377
379             } else if (tokens[user].exists && isAccountEligible) {

// @audit stakedAt[msg.sender] also accessed at 398
399             if (block.timestamp - stakedAt[msg.sender] < STAKING_PERIOD) revert WaitMoreTime();

// @audit stakedAt[msg.sender] also accessed at 398, 399
401             stakedAt[msg.sender] = 0;

// @audit stakedAt[user] also accessed at 479
481             uint256 totalTimeStaked = block.timestamp - stakedAt[user];

// @audit unreleasedPSRIncome[underlying] also accessed at 568
580             unreleasedPSRIncome[underlying] = totalIncomeUnreleased;

// @audit unreleasedPLPIncome[underlying] also accessed at 572
581             unreleasedPLPIncome[underlying] = totalAccruedInPLP;

// @audit markets[vToken] also accessed at 555
584             if (markets[vToken].sumOfMembersScore > 0) {

// @audit markets[vToken] also accessed at 555, 584
585                 delta = ((distributionIncome * EXP_SCALE) / markets[vToken].sumOfMembersScore);

// @audit markets[vToken] also accessed at 555, 584, 585
// @audit markets[vToken] also accessed at 555, 584, 585, 588
588             markets[vToken].rewardIndex = markets[vToken].rewardIndex + delta;

// @audit _allMarkets[i] also accessed at 610
611                 _updateScore(user, _allMarkets[i]);

// @audit tokens[user] also accessed at 705
707             tokens[user].exists = true;

// @audit tokens[user] also accessed at 705, 707
708             tokens[user].isIrrevocable = isIrrevocable;

// @audit _allMarkets[i] also accessed at 731
733                 markets[_allMarkets[i]].sumOfMembersScore =

// @audit markets[_allMarkets[i]] also accessed at 733
// @audit _allMarkets[i] also accessed at 731, 733
734                     markets[_allMarkets[i]].sumOfMembersScore -

// @audit markets[market] also accessed at 795
// @audit markets[market] also accessed at 795, 800
800             markets[market].sumOfMembersScore = markets[market].sumOfMembersScore - interests[market][user].score + score;

// @audit markets[market] also accessed at 881
882             uint256 supplyCapUSD = (xvsPrice * ((xvs * markets[market].supplyMultiplier) / EXP_SCALE)) / EXP_SCALE;

```
*GitHub*: [[271](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L271-L271), [272](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L272-L272), [276](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L276-L276), [277](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L277-L277), [295](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L295-L295), [296](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L296-L296), [297](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L297-L297), [298](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L298-L298), [299](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L299-L299), [370](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L370-L370), [375](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L375-L375), [376](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L376-L376), [377](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L377-L377), [377](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L377-L377), [378](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L378-L378), [379](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L379-L379), [399](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L399-L399), [401](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L401-L401), [481](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L481-L481), [580](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L580-L580), [581](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L581-L581), [584](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L584-L584), [585](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L585-L585), [588](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L588-L588), [588](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L588-L588), [611](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L611-L611), [707](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L707-L707), [708](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L708-L708), [733](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L733-L733), [734](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L734-L734), [734](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L734-L734), [800](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L800-L800), [800](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L800-L800), [882](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L882-L882)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

// @audit tokenAmountAccrued[token_] also accessed at 199
200             tokenAmountAccrued[token_] = 0;

// @audit tokenAmountAccrued[token_] also accessed at 261
266                     tokenAmountAccrued[token_] += tokenAccrued;

// @audit lastAccruedBlock[token_] also accessed at 255
270                 lastAccruedBlock[token_] = blockNumber;

// @audit lastAccruedBlock[token_] also accessed at 289
298             lastAccruedBlock[token_] = blockNumber;

// @audit tokenDistributionSpeeds[token_] also accessed at 315
322                 tokenDistributionSpeeds[token_] = distributionSpeed_;

```
*GitHub*: [[200](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L200-L200), [266](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L266-L266), [270](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L270-L270), [298](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L298-L298), [322](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L322-L322)]



### [G&#x2011;16] Multiple `address`/ID mappings can be combined into a single `mapping` of an `address`/ID to a `struct`, where appropriate
Saves a storage slot for the mapping. Depending on the circumstances and sizes of types, can avoid a Gsset (**20000 gas**) per mapping combined. Reads and subsequent writes can also be cheaper when a function requires both values and they both fit in the same storage slot. Finally, if both fields are accessed in the same function, can save **~42 gas per access** due to [not having to recalculate the key's keccak256 hash](https://gist.github.com/IllIllI000/ec23a57daa30a8f8ca8b9681c8ccefb0) (Gkeccak256 - 30 gas) and that calculation's associated stack operations.

*There are 10 instances of this issue:*

<details>

<summary>see instances</summary>

```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

21        mapping(address => uint256) public tokenDistributionSpeeds;

24        mapping(address => uint256) public lastAccruedBlock;

27        mapping(address => uint256) public tokenAmountAccrued;

```
*GitHub*: [[21](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L21-L21), [24](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L24-L24), [27](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L27-L27)]


```solidity
File: contracts/Tokens/Prime/PrimeStorage.sol

46        mapping(address => Token) public tokens;

61        mapping(address => uint256) public stakedAt;

64        mapping(address => Market) public markets;

67        mapping(address => mapping(address => Interest)) public interests;

100         mapping(address => address) public vTokenForAsset;

110         mapping(address => uint256) public unreleasedPSRIncome;

114         mapping(address => uint256) public unreleasedPLPIncome;

```
*GitHub*: [[46](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L46-L46), [61](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L61-L61), [64](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L64-L64), [67](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L67-L67), [100](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L100-L100), [110](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L110-L110), [114](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L114-L114)]


</details>


### [G&#x2011;17] Nesting `if`-statements is cheaper than using `&&`
Nesting `if`-statements avoids the stack operations of setting up and using an extra `jumpdest`, and saves **6 [gas](https://gist.github.com/IllIllI000/7f3b818abecfadbef93b894481ae7d19)**

*There are 7 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

337                     if (userToken.exists && !userToken.isIrrevocable) {

369             if (tokens[user].exists && !isAccountEligible) {

375             } else if (!isAccountEligible && !tokens[user].exists && stakedAt[user] > 0) {

377             } else if (stakedAt[user] == 0 && isAccountEligible && !tokens[user].exists) {

379             } else if (tokens[user].exists && isAccountEligible) {

830             if (pendingScoreUpdates > 0 && !isScoreUpdated[nextScoreUpdateRoundId][user]) {

```
*GitHub*: [[337](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L337-L337), [369](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L369-L369), [375](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L375-L375), [377](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L377-L377), [379](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L379-L379), [830](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L830-L830)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

262                 if (distributionSpeed > 0 && balanceDiff > 0) {

```
*GitHub*: [[262](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L262-L262)]



### [G&#x2011;18] Reduce gas usage by moving to Solidity 0.8.19 or later
See [this](https://blog.soliditylang.org/2023/02/22/solidity-0.8.19-release-announcement/#preventing-dead-code-in-runtime-bytecode) link for the full details

*There are 7 instances of this issue:*

<details>

<summary>see instances</summary>

```solidity
File: contracts/Tokens/Prime/IPrime.sol

2   pragma solidity ^0.5.16;

```
*GitHub*: [[2](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/IPrime.sol#L2-L2)]


```solidity
File: contracts/Tokens/Prime/Prime.sol

2   pragma solidity 0.8.13;

```
*GitHub*: [[2](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L2-L2)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

2   pragma solidity 0.8.13;

```
*GitHub*: [[2](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L2-L2)]


```solidity
File: contracts/Tokens/Prime/PrimeStorage.sol

2   pragma solidity 0.8.13;

```
*GitHub*: [[2](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L2-L2)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath.sol

4   pragma solidity 0.8.13;

```
*GitHub*: [[4](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol#L4-L4)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath0x.sol

4   pragma solidity 0.8.13;

```
*GitHub*: [[4](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L4-L4)]


```solidity
File: contracts/Tokens/Prime/libs/Scores.sol

3   pragma solidity 0.8.13;

```
*GitHub*: [[3](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L3-L3)]


</details>


### [G&#x2011;19] Constructors can be marked `payable`
Payable functions cost less gas to execute, since the compiler does not have to add extra checks to ensure that a payment wasn't provided. A constructor can safely be marked as payable, since only the deployer would be able to pass funds, and the project itself would not pass any funds.

*There are 2 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

103         constructor(address _wbnb, address _vbnb, uint256 _blocksPerYear) {

```
*GitHub*: [[103](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L103-L103)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

78        constructor() {

```
*GitHub*: [[78](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L78-L78)]



### [G&#x2011;20] `<x> += <y>` costs more gas than `<x> = <x> + <y>` for state variables
Using the addition operator instead of plus-equals saves **[113 gas](https://gist.github.com/IllIllI000/cbbfb267425b898e5be734d4008d4fe8)**

*There are 2 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

785             interests[vToken][user].accrued += _interestAccrued(vToken, user);

```
*GitHub*: [[785](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L785-L785)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

266                     tokenAmountAccrued[token_] += tokenAccrued;

```
*GitHub*: [[266](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L266-L266)]



### [G&#x2011;21] Using `private` rather than `public` for constants, saves gas
If needed, the values can be read from the verified contract source code, or if there are multiple values there can be a single getter function that [returns a tuple](https://github.com/code-423n4/2022-08-frax/blob/90f55a9ce4e25bceed3a74290b854341d8de6afa/src/contracts/FraxlendPair.sol#L156-L178) of the values of all currently-public constants. Saves **3406-3606 gas** in deployment gas due to the compiler not having to create non-payable getter functions for deployment calldata, not having to store the bytes of the value outside of where it's used, and not adding another entry to the method ID table

*There are 4 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

12        uint256 public constant MAX_DISTRIBUTION_SPEED = 1e18;

```
*GitHub*: [[12](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L12-L12)]


```solidity
File: contracts/Tokens/Prime/PrimeStorage.sol

34        uint256 public constant MINIMUM_STAKED_XVS = 1000 * EXP_SCALE;

37        uint256 public constant MAXIMUM_XVS_CAP = 100000 * EXP_SCALE;

40        uint256 public constant STAKING_PERIOD = 90 * 24 * 60 * 60;

```
*GitHub*: [[34](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L34-L34), [37](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L37-L37), [40](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L40-L40)]



### [G&#x2011;22] Use a more recent version of solidity
Use a solidity version of at least 0.8.2 to get simple compiler automatic inlining
Use a solidity version of at least 0.8.3 to get better struct packing and cheaper multiple storage reads
Use a solidity version of at least 0.8.4 to get custom errors, which are cheaper at deployment than `revert()/require()` strings
Use a solidity version of at least 0.8.10 to have external calls skip contract existence checks if the external call has a return value

*There is one instance of this issue:*
```solidity
File: contracts/Tokens/Prime/IPrime.sol

2   pragma solidity ^0.5.16;

```
*GitHub*: [[2](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/IPrime.sol#L2-L2)]



### [G&#x2011;23] Simple checks for zero can be done using assembly to save gas

*There are 20 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

104             if (_wbnb == address(0)) revert InvalidAddress();

105             if (_vbnb == address(0)) revert InvalidAddress();

106             if (_blocksPerYear == 0) revert InvalidBlocksPerYear();

143             if (_xvsVault == address(0)) revert InvalidAddress();

144             if (_xvsVaultRewardToken == address(0)) revert InvalidAddress();

145             if (_protocolShareReserve == address(0)) revert InvalidAddress();

146             if (_comptroller == address(0)) revert InvalidAddress();

147             if (_oracle == address(0)) revert InvalidAddress();

148             if (_primeLiquidityProvider == address(0)) revert InvalidAddress();

201             if (pendingScoreUpdates == 0) revert NoScoreUpdatesRequired();

202             if (nextScoreUpdateRoundId == 0) revert NoScoreUpdatesRequired();

398             if (stakedAt[msg.sender] == 0) revert IneligibleToClaim();

457             if (vToken == address(0)) revert MarketNotSupported();

479             if (stakedAt[user] == 0) return STAKING_PERIOD;

576             if (distributionIncome == 0) {

1002              if (totalScore == 0) return (0, 0);

1007              if (totalCappedValue == 0) return (0, 0);

```
*GitHub*: [[104](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L104-L104), [105](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L105-L105), [106](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L106-L106), [143](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L143-L143), [144](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L144-L144), [145](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L145-L145), [146](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L146-L146), [147](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L147-L147), [148](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L148-L148), [201](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L201-L201), [202](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L202-L202), [398](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L398-L398), [457](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L457-L457), [479](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L479-L479), [576](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L576-L576), [1002](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L1002-L1002), [1007](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L1007-L1007)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

335             if (lastBlockAccrued == 0) {

345             if (address_ == address(0)) {

```
*GitHub*: [[335](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L335-L335), [345](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L345-L345)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath0x.sol

145             if (x == 0) {

```
*GitHub*: [[145](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L145-L145)]



### [G&#x2011;24] Redundant state variable getters
Getters for public state variables are automatically generated so there is no need to code them manually and waste gas.

*There is one instance of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

469         function getAllMarkets() external view returns (address[] memory) {
470             return allMarkets;
471         }

```
*GitHub*: [[469](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L469-L471)]



### [G&#x2011;25] `unchecked {}`  can be used on the division of two `uint`s in order to save gas
The division cannot overflow, since both the numerator and the denominator are non-negative

*There are 20 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

501             uint256 supply = (exchangeRate * balanceOfAccount) / EXP_SCALE;

585                 delta = ((distributionIncome * EXP_SCALE) / markets[vToken].sumOfMembersScore);

654             uint256 supply = (exchangeRate * balanceOfAccount) / EXP_SCALE;

881             uint256 borrowCapUSD = (xvsPrice * ((xvs * markets[market].borrowMultiplier) / EXP_SCALE)) / EXP_SCALE;

882             uint256 supplyCapUSD = (xvsPrice * ((xvs * markets[market].supplyMultiplier) / EXP_SCALE)) / EXP_SCALE;

885             uint256 supplyUSD = (tokenPrice * supply) / EXP_SCALE;

886             uint256 borrowUSD = (tokenPrice * borrow) / EXP_SCALE;

889                 supply = supplyUSD > 0 ? (supply * supplyCapUSD) / supplyUSD : 0;

893                 borrow = borrowUSD > 0 ? (borrow * borrowCapUSD) / borrowUSD : 0;

922             return (index * score) / EXP_SCALE;

949             return ((((market.totalBorrows() * market.borrowRatePerBlock()) / EXP_SCALE) * market.reserveFactorMantissa()) /
950                 EXP_SCALE);

972             uint256 incomePerBlockForDistributionFromMarket = (totalIncomePerBlockFromMarket * _distributionPercentage()) /
973                 IProtocolShareReserve(protocolShareReserve).MAX_PERCENT();

1004              uint256 userYearlyIncome = (userScore * _incomeDistributionYearly(vToken)) / totalScore;

1009              uint256 userSupplyIncomeYearly = (userYearlyIncome * totalCappedSupply) / totalCappedValue;

1010              uint256 userBorrowIncomeYearly = (userYearlyIncome * totalCappedBorrow) / totalCappedValue;

1012              supplyAPR = totalSupply == 0 ? 0 : ((userSupplyIncomeYearly * MAXIMUM_BPS) / totalSupply);

1013              borrowAPR = totalBorrow == 0 ? 0 : ((userBorrowIncomeYearly * MAXIMUM_BPS) / totalBorrow);

```
*GitHub*: [[501](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L501-L501), [585](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L585-L585), [654](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L654-L654), [881](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L881-L881), [881](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L881-L881), [882](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L882-L882), [882](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L882-L882), [885](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L885-L885), [886](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L886-L886), [889](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L889-L889), [893](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L893-L893), [922](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L922-L922), [949](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L949-L950), [949](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L949-L949), [972](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L972-L973), [1004](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L1004-L1004), [1009](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L1009-L1009), [1010](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L1010-L1010), [1012](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L1012-L1012), [1013](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L1013-L1013)]



### [G&#x2011;26] Add `unchecked {}` for subtractions where the operands cannot underflow because of a previous `require()` or `if`-statement
`require(a <= b); x = b - a` => `require(a <= b); unchecked { x = b - a }`

*There are 23 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

399             if (block.timestamp - stakedAt[msg.sender] < STAKING_PERIOD) revert WaitMoreTime();

481             uint256 totalTimeStaked = block.timestamp - stakedAt[user];

483                 return STAKING_PERIOD - totalTimeStaked;

534             uint256 totalScore = markets[market].sumOfMembersScore - interests[market][user].score;

568             uint256 distributionIncome = totalIncomeUnreleased - unreleasedPSRIncome[underlying];

572             uint256 unreleasedPLPAccruedInterest = totalAccruedInPLP - unreleasedPLPIncome[underlying];

661             capital = capital * (10 ** (18 - vToken.decimals()));

734                     markets[_allMarkets[i]].sumOfMembersScore -
735                     interests[_allMarkets[i]][user].score;

800             markets[market].sumOfMembersScore = markets[market].sumOfMembersScore - interests[market][user].score + score;

846             return (xvs - pendingWithdrawals);

919             uint256 index = markets[vToken].rewardIndex - interests[vToken][user].rewardIndex;

```
*GitHub*: [[399](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L399-L399), [481](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L481-L481), [483](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L483-L483), [534](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L534-L534), [568](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L568-L568), [572](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L572-L572), [661](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L661-L661), [734](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L734-L735), [800](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L800-L800), [846](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L846-L846), [919](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L919-L919)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

237             if (balance - accrued > 0) {

255             uint256 deltaBlocks = blockNumber - lastAccruedBlock[token_];

261                 uint256 balanceDiff = balance - tokenAmountAccrued[token_];

```
*GitHub*: [[237](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L237-L237), [255](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L255-L255), [261](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L261-L261)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath0x.sol

120             z = y = x - FIXED_1;

122             r += (z * (0x100000000000000000000000000000000 - y)) / 0x100000000000000000000000000000000;

124             r += (z * (0x0aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa - y)) / 0x200000000000000000000000000000000;

126             r += (z * (0x099999999999999999999999999999999 - y)) / 0x300000000000000000000000000000000;

128             r += (z * (0x092492492492492492492492492492492 - y)) / 0x400000000000000000000000000000000;

130             r += (z * (0x08e38e38e38e38e38e38e38e38e38e38e - y)) / 0x500000000000000000000000000000000;

132             r += (z * (0x08ba2e8ba2e8ba2e8ba2e8ba2e8ba2e8b - y)) / 0x600000000000000000000000000000000;

134             r += (z * (0x089d89d89d89d89d89d89d89d89d89d89 - y)) / 0x700000000000000000000000000000000;

136             r += (z * (0x088888888888888888888888888888888 - y)) / 0x800000000000000000000000000000000; // add y^15 / 15 - y^16 / 16

```
*GitHub*: [[120](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L120-L120), [122](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L122-L122), [124](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L124-L124), [126](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L126-L126), [128](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L128-L128), [130](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L130-L130), [132](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L132-L132), [134](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L134-L134), [136](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L136-L136)]



### [G&#x2011;27] Usage of `int`s/`uint`s smaller than 32 bytes incurs overhead
Using `ints`/`uints` smaller than 32 bytes may cost more gas. This is because the EVM operates on 32 bytes at a time, so if an element is smaller than 32 bytes, the EVM must perform more operations to reduce the size of the element from 32 bytes to the desired size.

*There are 12 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

// @audit uint128
75            uint128 indexed oldNumerator,

// @audit uint128
76            uint128 indexed oldDenominator,

// @audit uint128
77            uint128 indexed newNumerator,

// @audit uint128
78            uint128 newDenominator

// @audit uint128
134             uint128 _alphaNumerator,

// @audit uint128
135             uint128 _alphaDenominator,

// @audit uint128
237         function updateAlpha(uint128 _alphaNumerator, uint128 _alphaDenominator) external {

// @audit uint128
809         function _checkAlphaArguments(uint128 _alphaNumerator, uint128 _alphaDenominator) internal {

```
*GitHub*: [[75](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L75-L75), [76](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L76-L76), [77](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L77-L77), [78](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L78-L78), [134](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L134-L134), [135](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L135-L135), [237](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L237-L237), [237](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L237-L237), [809](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L809-L809), [809](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L809-L809)]


```solidity
File: contracts/Tokens/Prime/PrimeStorage.sol

// @audit uint128
73        uint128 public alphaNumerator;

// @audit uint128
76        uint128 public alphaDenominator;

```
*GitHub*: [[73](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L73-L73), [76](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L76-L76)]



### [G&#x2011;28] Remove or replace unused state variables
Saves a storage slot. If the variable is assigned a non-zero value, saves Gsset (**20000 gas**). If it's assigned a zero value, saves Gsreset (**2900 gas**). If the variable remains unassigned, there is no gas savings unless the variable is `public`, in which case the compiler-generated non-payable getter deployment cost is saved. If the state variable is overriding an interface's public function, mark the variable as `constant` or `immutable` so that it does not use a storage slot

*There are 30 instances of this issue:*

<details>

<summary>see instances</summary>

```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

15        uint256 internal constant EXP_SCALE = 1e18;

```
*GitHub*: [[15](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L15-L15)]


```solidity
File: contracts/Tokens/Prime/PrimeStorage.sol

34        uint256 public constant MINIMUM_STAKED_XVS = 1000 * EXP_SCALE;

37        uint256 public constant MAXIMUM_XVS_CAP = 100000 * EXP_SCALE;

40        uint256 public constant STAKING_PERIOD = 90 * 24 * 60 * 60;

43        uint256 internal constant MAXIMUM_BPS = 10000;

46        mapping(address => Token) public tokens;

49        uint256 public totalIrrevocable;

52        uint256 public totalRevocable;

55        uint256 public revocableLimit;

58        uint256 public irrevocableLimit;

61        mapping(address => uint256) public stakedAt;

64        mapping(address => Market) public markets;

67        mapping(address => mapping(address => Interest)) public interests;

70        address[] internal allMarkets;

73        uint128 public alphaNumerator;

76        uint128 public alphaDenominator;

79        address internal xvsVault;

82        address internal xvsVaultRewardToken;

85        uint256 internal xvsVaultPoolId;

88        mapping(uint256 => mapping(address => bool)) public isScoreUpdated;

91        uint256 public nextScoreUpdateRoundId;

94        uint256 public totalScoreUpdatesRequired;

97        uint256 public pendingScoreUpdates;

100         mapping(address => address) public vTokenForAsset;

103         address public protocolShareReserve;

106         address public comptroller;

110         mapping(address => uint256) public unreleasedPSRIncome;

114         mapping(address => uint256) public unreleasedPLPIncome;

117         address public primeLiquidityProvider;

120         ResilientOracleInterface public oracle;

```
*GitHub*: [[34](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L34-L34), [37](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L37-L37), [40](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L40-L40), [43](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L43-L43), [46](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L46-L46), [49](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L49-L49), [52](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L52-L52), [55](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L55-L55), [58](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L58-L58), [61](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L61-L61), [64](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L64-L64), [67](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L67-L67), [70](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L70-L70), [73](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L73-L73), [76](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L76-L76), [79](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L79-L79), [82](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L82-L82), [85](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L85-L85), [88](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L88-L88), [91](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L91-L91), [94](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L94-L94), [97](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L97-L97), [100](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L100-L100), [103](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L103-L103), [106](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L106-L106), [110](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L110-L110), [114](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L114-L114), [117](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L117-L117), [120](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol#L120-L120)]


</details>


### [G&#x2011;29] `internal` functions not called by the contract should be removed to save deployment gas
If the functions are required by an interface, the contract should inherit from that interface and use the `override` keyword

*There are 8 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/libs/FixedMath.sol

22        function toFixed(uint256 n, uint256 d) internal pure returns (int256) {
23            if (d.toInt256() < n.toInt256()) revert InvalidFraction(n, d);
24    
25            return (n.toInt256() * FixedMath0x.FIXED_1) / int256(d.toInt256());
26        }

34        function uintDiv(uint256 u, int256 f) internal pure returns (uint256) {
35            if (f < 0) revert InvalidFixedPoint();
36            // multiply `u` by FIXED_1 to cancel out the built-in FIXED_1 in f
37            return uint256((u.toInt256() * FixedMath0x.FIXED_1) / f);
38        }

46        function uintMul(uint256 u, int256 f) internal pure returns (uint256) {
47            if (f < 0) revert InvalidFixedPoint();
48            // divide the product by FIXED_1 to cancel out the built-in FIXED_1 in f
49            return uint256((u.toInt256() * f) / FixedMath0x.FIXED_1);
50        }

53        function ln(int256 x) internal pure returns (int256 r) {
54            return FixedMath0x.ln(x);
55        }

58        function exp(int256 x) internal pure returns (int256 r) {
59            return FixedMath0x.exp(x);
60        }

```
*GitHub*: [[22](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol#L22-L26), [34](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol#L34-L38), [46](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol#L46-L50), [53](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol#L53-L55), [58](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol#L58-L60)]


```solidity
File: contracts/Tokens/Prime/libs/FixedMath0x.sol

51        function ln(int256 x) internal pure returns (int256 r) {
52            if (x > LN_MAX_VAL) {
53                revert LnTooLarge(x);
54            }
55            if (x <= 0) {
56                revert LnNonRealResult(x);
57            }
58            if (x == FIXED_1) {
59                return 0;
60            }
61            if (x <= LN_MIN_VAL) {
62                return EXP_MIN_VAL;
63            }
64    
65            int256 y;
66            int256 z;
67            int256 w;
68    
69            // Rewrite the input as a quotient of negative natural exponents and a single residual q, such that 1 < q < 2
70            // For example: log(0.3) = log(e^-1 * e^-0.25 * 1.0471028872385522)
71            //              = 1 - 0.25 - log(1 + 0.0471028872385522)
72            // e ^ -32
73            if (x <= int256(0x00000000000000000000000000000000000000000001c8464f76164760000000)) {
74                r -= int256(0x0000000000000000000000000000001000000000000000000000000000000000); // - 32
75                x = (x * FIXED_1) / int256(0x00000000000000000000000000000000000000000001c8464f76164760000000); // / e ^ -32
76            }
77            // e ^ -16
78            if (x <= int256(0x00000000000000000000000000000000000000f1aaddd7742e90000000000000)) {
79                r -= int256(0x0000000000000000000000000000000800000000000000000000000000000000); // - 16
80                x = (x * FIXED_1) / int256(0x00000000000000000000000000000000000000f1aaddd7742e90000000000000); // / e ^ -16
81            }
82            // e ^ -8
83            if (x <= int256(0x00000000000000000000000000000000000afe10820813d78000000000000000)) {
84                r -= int256(0x0000000000000000000000000000000400000000000000000000000000000000); // - 8
85                x = (x * FIXED_1) / int256(0x00000000000000000000000000000000000afe10820813d78000000000000000); // / e ^ -8
86            }
87            // e ^ -4
88            if (x <= int256(0x0000000000000000000000000000000002582ab704279ec00000000000000000)) {
89                r -= int256(0x0000000000000000000000000000000200000000000000000000000000000000); // - 4
90                x = (x * FIXED_1) / int256(0x0000000000000000000000000000000002582ab704279ec00000000000000000); // / e ^ -4
91            }
92            // e ^ -2
93            if (x <= int256(0x000000000000000000000000000000001152aaa3bf81cc000000000000000000)) {
94                r -= int256(0x0000000000000000000000000000000100000000000000000000000000000000); // - 2
95                x = (x * FIXED_1) / int256(0x000000000000000000000000000000001152aaa3bf81cc000000000000000000); // / e ^ -2
96            }
97            // e ^ -1
98            if (x <= int256(0x000000000000000000000000000000002f16ac6c59de70000000000000000000)) {
99                r -= int256(0x0000000000000000000000000000000080000000000000000000000000000000); // - 1
100                x = (x * FIXED_1) / int256(0x000000000000000000000000000000002f16ac6c59de70000000000000000000); // / e ^ -1
101            }
102            // e ^ -0.5
103            if (x <= int256(0x000000000000000000000000000000004da2cbf1be5828000000000000000000)) {
104                r -= int256(0x0000000000000000000000000000000040000000000000000000000000000000); // - 0.5
105                x = (x * FIXED_1) / int256(0x000000000000000000000000000000004da2cbf1be5828000000000000000000); // / e ^ -0.5
106            }
107            // e ^ -0.25
108            if (x <= int256(0x0000000000000000000000000000000063afbe7ab2082c000000000000000000)) {
109                r -= int256(0x0000000000000000000000000000000020000000000000000000000000000000); // - 0.25
110                x = (x * FIXED_1) / int256(0x0000000000000000000000000000000063afbe7ab2082c000000000000000000); // / e ^ -0.25
111            }
112            // e ^ -0.125
113            if (x <= int256(0x0000000000000000000000000000000070f5a893b608861e1f58934f97aea57d)) {
114                r -= int256(0x0000000000000000000000000000000010000000000000000000000000000000); // - 0.125
115                x = (x * FIXED_1) / int256(0x0000000000000000000000000000000070f5a893b608861e1f58934f97aea57d); // / e ^ -0.125
116            }
117            // `x` is now our residual in the range of 1 <= x <= 2 (or close enough).
118    
119            // Add the taylor series for log(1 + z), where z = x - 1
120            z = y = x - FIXED_1;
121            w = (y * y) / FIXED_1;
122            r += (z * (0x100000000000000000000000000000000 - y)) / 0x100000000000000000000000000000000;
123            z = (z * w) / FIXED_1; // add y^01 / 01 - y^02 / 02
124            r += (z * (0x0aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa - y)) / 0x200000000000000000000000000000000;
125            z = (z * w) / FIXED_1; // add y^03 / 03 - y^04 / 04
126            r += (z * (0x099999999999999999999999999999999 - y)) / 0x300000000000000000000000000000000;
127            z = (z * w) / FIXED_1; // add y^05 / 05 - y^06 / 06
128            r += (z * (0x092492492492492492492492492492492 - y)) / 0x400000000000000000000000000000000;
129            z = (z * w) / FIXED_1; // add y^07 / 07 - y^08 / 08
130            r += (z * (0x08e38e38e38e38e38e38e38e38e38e38e - y)) / 0x500000000000000000000000000000000;
131            z = (z * w) / FIXED_1; // add y^09 / 09 - y^10 / 10
132            r += (z * (0x08ba2e8ba2e8ba2e8ba2e8ba2e8ba2e8b - y)) / 0x600000000000000000000000000000000;
133            z = (z * w) / FIXED_1; // add y^11 / 11 - y^12 / 12
134            r += (z * (0x089d89d89d89d89d89d89d89d89d89d89 - y)) / 0x700000000000000000000000000000000;
135            z = (z * w) / FIXED_1; // add y^13 / 13 - y^14 / 14
136            r += (z * (0x088888888888888888888888888888888 - y)) / 0x800000000000000000000000000000000; // add y^15 / 15 - y^16 / 16
137        }

140         function exp(int256 x) internal pure returns (int256 r) {
141             if (x < EXP_MIN_VAL) {
142                 // Saturate to zero below EXP_MIN_VAL.
143                 return 0;
144             }
145             if (x == 0) {
146                 return FIXED_1;
147             }
148             if (x > EXP_MAX_VAL) {
149                 revert ExpTooLarge(x);
150             }
151     
152             // Rewrite the input as a product of natural exponents and a
153             // single residual q, where q is a number of small magnitude.
154             // For example: e^-34.419 = e^(-32 - 2 - 0.25 - 0.125 - 0.044)
155             //              = e^-32 * e^-2 * e^-0.25 * e^-0.125 * e^-0.044
156             //              -> q = -0.044
157     
158             // Multiply with the taylor series for e^q
159             int256 y;
160             int256 z;
161             // q = x % 0.125 (the residual)
162             z = y = x % 0x0000000000000000000000000000000010000000000000000000000000000000;
163             z = (z * y) / FIXED_1;
164             r += z * 0x10e1b3be415a0000; // add y^02 * (20! / 02!)
165             z = (z * y) / FIXED_1;
166             r += z * 0x05a0913f6b1e0000; // add y^03 * (20! / 03!)
167             z = (z * y) / FIXED_1;
168             r += z * 0x0168244fdac78000; // add y^04 * (20! / 04!)
169             z = (z * y) / FIXED_1;
170             r += z * 0x004807432bc18000; // add y^05 * (20! / 05!)
171             z = (z * y) / FIXED_1;
172             r += z * 0x000c0135dca04000; // add y^06 * (20! / 06!)
173             z = (z * y) / FIXED_1;
174             r += z * 0x0001b707b1cdc000; // add y^07 * (20! / 07!)
175             z = (z * y) / FIXED_1;
176             r += z * 0x000036e0f639b800; // add y^08 * (20! / 08!)
177             z = (z * y) / FIXED_1;
178             r += z * 0x00000618fee9f800; // add y^09 * (20! / 09!)
179             z = (z * y) / FIXED_1;
180             r += z * 0x0000009c197dcc00; // add y^10 * (20! / 10!)
181             z = (z * y) / FIXED_1;
182             r += z * 0x0000000e30dce400; // add y^11 * (20! / 11!)
183             z = (z * y) / FIXED_1;
184             r += z * 0x000000012ebd1300; // add y^12 * (20! / 12!)
185             z = (z * y) / FIXED_1;
186             r += z * 0x0000000017499f00; // add y^13 * (20! / 13!)
187             z = (z * y) / FIXED_1;
188             r += z * 0x0000000001a9d480; // add y^14 * (20! / 14!)
189             z = (z * y) / FIXED_1;
190             r += z * 0x00000000001c6380; // add y^15 * (20! / 15!)
191             z = (z * y) / FIXED_1;
192             r += z * 0x000000000001c638; // add y^16 * (20! / 16!)
193             z = (z * y) / FIXED_1;
194             r += z * 0x0000000000001ab8; // add y^17 * (20! / 17!)
195             z = (z * y) / FIXED_1;
196             r += z * 0x000000000000017c; // add y^18 * (20! / 18!)
197             z = (z * y) / FIXED_1;
198             r += z * 0x0000000000000014; // add y^19 * (20! / 19!)
199             z = (z * y) / FIXED_1;
200             r += z * 0x0000000000000001; // add y^20 * (20! / 20!)
201             r = r / 0x21c3677c82b40000 + y + FIXED_1; // divide by 20! and then add y^1 / 1! + y^0 / 0!
202     
203             // Multiply with the non-residual terms.
204             x = -x;
205             // e ^ -32
206             if ((x & int256(0x0000000000000000000000000000001000000000000000000000000000000000)) != 0) {
207                 r =
208                     (r * int256(0x00000000000000000000000000000000000000f1aaddd7742e56d32fb9f99744)) /
209                     int256(0x0000000000000000000000000043cbaf42a000812488fc5c220ad7b97bf6e99e); // * e ^ -32
210             }
211             // e ^ -16
212             if ((x & int256(0x0000000000000000000000000000000800000000000000000000000000000000)) != 0) {
213                 r =
214                     (r * int256(0x00000000000000000000000000000000000afe10820813d65dfe6a33c07f738f)) /
215                     int256(0x000000000000000000000000000005d27a9f51c31b7c2f8038212a0574779991); // * e ^ -16
216             }
217             // e ^ -8
218             if ((x & int256(0x0000000000000000000000000000000400000000000000000000000000000000)) != 0) {
219                 r =
220                     (r * int256(0x0000000000000000000000000000000002582ab704279e8efd15e0265855c47a)) /
221                     int256(0x0000000000000000000000000000001b4c902e273a58678d6d3bfdb93db96d02); // * e ^ -8
222             }
223             // e ^ -4
224             if ((x & int256(0x0000000000000000000000000000000200000000000000000000000000000000)) != 0) {
225                 r =
226                     (r * int256(0x000000000000000000000000000000001152aaa3bf81cb9fdb76eae12d029571)) /
227                     int256(0x00000000000000000000000000000003b1cc971a9bb5b9867477440d6d157750); // * e ^ -4
228             }
229             // e ^ -2
230             if ((x & int256(0x0000000000000000000000000000000100000000000000000000000000000000)) != 0) {
231                 r =
232                     (r * int256(0x000000000000000000000000000000002f16ac6c59de6f8d5d6f63c1482a7c86)) /
233                     int256(0x000000000000000000000000000000015bf0a8b1457695355fb8ac404e7a79e3); // * e ^ -2
234             }
235             // e ^ -1
236             if ((x & int256(0x0000000000000000000000000000000080000000000000000000000000000000)) != 0) {
237                 r =
238                     (r * int256(0x000000000000000000000000000000004da2cbf1be5827f9eb3ad1aa9866ebb3)) /
239                     int256(0x00000000000000000000000000000000d3094c70f034de4b96ff7d5b6f99fcd8); // * e ^ -1
240             }
241             // e ^ -0.5
242             if ((x & int256(0x0000000000000000000000000000000040000000000000000000000000000000)) != 0) {
243                 r =
244                     (r * int256(0x0000000000000000000000000000000063afbe7ab2082ba1a0ae5e4eb1b479dc)) /
245                     int256(0x00000000000000000000000000000000a45af1e1f40c333b3de1db4dd55f29a7); // * e ^ -0.5
246             }
247             // e ^ -0.25
248             if ((x & int256(0x0000000000000000000000000000000020000000000000000000000000000000)) != 0) {
249                 r =
250                     (r * int256(0x0000000000000000000000000000000070f5a893b608861e1f58934f97aea57d)) /
251                     int256(0x00000000000000000000000000000000910b022db7ae67ce76b441c27035c6a1); // * e ^ -0.25
252             }
253             // e ^ -0.125
254             if ((x & int256(0x0000000000000000000000000000000010000000000000000000000000000000)) != 0) {
255                 r =
256                     (r * int256(0x00000000000000000000000000000000783eafef1c0a8f3978c7f81824d62ebf)) /
257                     int256(0x0000000000000000000000000000000088415abbe9a76bead8d00cf112e4d4a8); // * e ^ -0.125
258             }
259         }

```
*GitHub*: [[51](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L51-L137), [140](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol#L140-L259)]


```solidity
File: contracts/Tokens/Prime/libs/Scores.sol

22        function calculateScore(
23            uint256 xvs,
24            uint256 capital,
25            uint256 alphaNumerator,
26            uint256 alphaDenominator
27        ) internal pure returns (uint256) {
28            // Score function is:
29            // xvs^𝝰 * capital^(1-𝝰)
30            //    = capital * capital^(-𝝰) * xvs^𝝰
31            //    = capital * (xvs / capital)^𝝰
32            //    = capital * (e ^ (ln(xvs / capital))) ^ 𝝰
33            //    = capital * e ^ (𝝰 * ln(xvs / capital))     (1)
34            // or
35            //    = capital / ( 1 / e ^ (𝝰 * ln(xvs / capital)))
36            //    = capital / (e ^ (𝝰 * ln(xvs / capital)) ^ -1)
37            //    = capital / e ^ (𝝰 * -1 * ln(xvs / capital))
38            //    = capital / e ^ (𝝰 * ln(capital / xvs))     (2)
39            //
40            // To avoid overflows, use (1) when xvs < capital and
41            // use (2) when capital < xvs
42    
43            // If any side is 0, exit early
44            if (xvs == 0 || capital == 0) return 0;
45    
46            // If both sides are equal, we have:
47            // xvs^𝝰 * capital^(1-𝝰)
48            //    = xvs^𝝰 * xvs^(1-𝝰)
49            //    = xvs^(𝝰 + 1 - 𝝰)     = xvs
50            if (xvs == capital) return xvs;
51    
52            bool lessxvsThanCapital = xvs < capital;
53    
54            // (xvs / capital) or (capital / xvs), always in range (0, 1)
55            int256 ratio = lessxvsThanCapital ? FixedMath.toFixed(xvs, capital) : FixedMath.toFixed(capital, xvs);
56    
57            // e ^ ( ln(ratio) * 𝝰 )
58            int256 exponentiation = FixedMath.exp(
59                (FixedMath.ln(ratio) * alphaNumerator.toInt256()) / alphaDenominator.toInt256()
60            );
61    
62            if (lessxvsThanCapital) {
63                // capital * e ^ (𝝰 * ln(xvs / capital))
64                return FixedMath.uintMul(capital, exponentiation);
65            }
66    
67            // capital / e ^ (𝝰 * ln(capital / xvs))
68            return FixedMath.uintDiv(capital, exponentiation);
69        }
70    }
71    

```
*GitHub*: [[22](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol#L22-L71)]



### [G&#x2011;30] Consider activating via-ir for deploying
By using `--via-ir` or `{"viaIR": true}`, the compiler is able to use more advanced [multi-function optimizations](https://docs.soliditylang.org/en/v0.8.17/ir-breaking-changes.html#solidity-ir-based-codegen-changes), for extra gas savings.

*There are 7 instances of this issue:*


- [*IPrime.sol*](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/IPrime.sol)

- [*Prime.sol*](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol)

- [*PrimeLiquidityProvider.sol*](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol)

- [*PrimeStorage.sol*](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeStorage.sol)

- [*FixedMath.sol*](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath.sol)

- [*FixedMath0x.sol*](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/FixedMath0x.sol)

- [*Scores.sol*](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/libs/Scores.sol)

### [G&#x2011;31] Use `!= 0` or `== 0` for unsigned integer comparison
Using `== 0`, `!= 0` instead of `> 0`, `>= 1`, `< 1`, `<= 0` can save gas.

*There are 11 instances of this issue:*
```solidity
File: contracts/Tokens/Prime/Prime.sol

// @audit Replace with != 0
375             } else if (!isAccountEligible && !tokens[user].exists && stakedAt[user] > 0) {

// @audit Replace with != 0
584             if (markets[vToken].sumOfMembersScore > 0) {

// @audit Replace with != 0
828             if (totalScoreUpdatesRequired > 0) totalScoreUpdatesRequired--;

// @audit Replace with != 0
830             if (pendingScoreUpdates > 0 && !isScoreUpdated[nextScoreUpdateRoundId][user]) {

// @audit Replace with != 0
889                 supply = supplyUSD > 0 ? (supply * supplyCapUSD) / supplyUSD : 0;

// @audit Replace with != 0
893                 borrow = borrowUSD > 0 ? (borrow * borrowCapUSD) / borrowUSD : 0;

```
*GitHub*: [[375](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L375-L375), [584](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L584-L584), [828](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L828-L828), [830](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L830-L830), [889](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L889-L889), [893](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/Prime.sol#L893-L893)]


```solidity
File: contracts/Tokens/Prime/PrimeLiquidityProvider.sol

// @audit Replace with != 0
237             if (balance - accrued > 0) {

// @audit Replace with != 0
257             if (deltaBlocks > 0) {

// @audit Replace with != 0
262                 if (distributionSpeed > 0 && balanceDiff > 0) {

// @audit Replace with != 0
291             if (initializedBlock > 0) {

```
*GitHub*: [[237](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L237-L237), [257](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L257-L257), [262](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L262-L262), [262](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L262-L262), [291](https://github.com/code-423n4/2023-09-venus/blob/main/contracts/Tokens/Prime/PrimeLiquidityProvider.sol#L291-L291)]



