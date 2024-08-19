/**
 * Given an integer n, representing an amount of money,
 * your goal is to determine the minimum number of coins
 * needed to achieve exactly n using any combination of
 * the following coin denominations:
 * [1, 5, 7, 9, 11] cents
 * Return the minimum number of coins that add up to n.
 */

const assert = require("node:assert").strict;

const coins = [1, 5, 7, 9, 11];

function CoinDeterminer(amount) {
  const memo = new Map();
  const max = amount + 1;

  function determiner(remaining) {
    if (remaining === 0) return 0;
    if (remaining < 0) return max;
    if (memo.has(remaining)) return memo.get(remaining);

    let minCoins = max;
    for (let coin of coins) {
      const result = determiner(remaining - coin);
      if (result !== max) {
        minCoins = Math.min(minCoins, 1 + result);
      }
    }

    memo.set(remaining, minCoins);
    return minCoins;
  }

  const result = determiner(amount);
  return result === max ? -1 : result;
}

assert.equal(CoinDeterminer(16), 2);
assert.equal(CoinDeterminer(25), 3);
assert.equal(CoinDeterminer(12), 2);
assert.equal(CoinDeterminer(5), 1);
assert.equal(CoinDeterminer(34), 4);
assert.equal(CoinDeterminer(37), 5);
assert.equal(CoinDeterminer(100), 10);
assert.equal(CoinDeterminer(14), 2);
