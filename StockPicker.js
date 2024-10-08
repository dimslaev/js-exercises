/**
 * Have the function StockPicker(arr) take the array of numbers
 * stored in arr which will contain integers that represent the
 * amount in dollars that a single stock is worth, and return
 * the maximum profit that could have been made by buying stock
 * on day x and selling stock on day y where y > x. For example:
 * if arr is [44, 30, 24, 32, 35, 30, 40, 38, 15] then your
 * program should return 16 because at index 2 the stock was
 * worth $24 and at index 6 the stock was then worth $40, so if
 * you bought the stock at 24 and sold it at 40, you would have
 * made a profit of $16, which is the maximum profit that could
 * have been made with this list of stock prices.
 * If there is not profit that could have been made with the
 * stock prices, then your program should return -1. For example:
 * arr is [10, 9, 8, 2] then your program should return -1.
 */

const assert = require("node:assert").strict;

function StockPicker(arr) {
  const maxes = [];
  for (let i = 0; i < arr.length; i++) {
    const rem = arr.slice(i + 1);
    const max = rem.sort((a, b) => b - a)[0];
    const curr = arr[i];
    if (curr < max) {
      maxes.push(max - curr);
    }
  }
  if (maxes.length === 0) return -1;
  return Math.max.apply(null, maxes);
}

assert.equal(StockPicker([44, 30, 24, 32, 35, 30, 40, 38, 15]), 16);
assert.equal(StockPicker([10, 12, 4, 5, 9]), 5);
assert.equal(StockPicker([14, 20, 4, 12, 5, 11]), 8);
assert.equal(StockPicker([1, 2, 3, 4, 5]), 4);
assert.equal(StockPicker([2, 10, 22, 1, 100]), 99);
assert.equal(StockPicker([1, 10]), 9);
assert.equal(StockPicker([5, 10, 4, 6, 12]), 8);
assert.equal(StockPicker([5, 10, 4, 6, 7]), 5);
assert.equal(StockPicker([10, 23, 12, 5, 10, 45]), 40);
