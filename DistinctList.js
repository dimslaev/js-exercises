/**
 * Have the function DistinctList(arr) take the array
 * of numbers stored in arr and determine the total
 * number of duplicate entries. For example if the
 * input is [1, 2, 2, 2, 3] then your program should
 * output 2 because there are two duplicates of one
 * of the elements.
 */

const assert = require("node:assert").strict;

function DistinctList(arr) {
  const hash = new Map();

  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];
    const val = hash.get(key);
    hash.set(key, typeof val === "number" ? val + 1 : 0);
  }

  let sum = 0;
  for (const value of hash.values()) {
    if (value > 0) sum += value;
  }

  return sum;
}

assert.equal(DistinctList([0, -2, -2, 5, 5, 5]), 3);
assert.equal(DistinctList([0, -2, -2]), 1);
assert.equal(DistinctList([100, 2, 101, 4]), 0);
assert.equal(DistinctList([1, 2, 2, 2, 3]), 2);
assert.equal(DistinctList([1, 2, 2, 2, 2, 2, 3]), 4);
assert.equal(DistinctList([5, 5, 5, 5, 5, 5, 5, 7]), 6);
assert.equal(DistinctList([5, -2, 50, 100]), 0);
assert.equal(DistinctList([0, 0, 0, 0]), 3);
assert.equal(DistinctList([1, 2, 3, 4, 5, 6, 7, 7]), 1);
assert.equal(DistinctList([1, 5, 9]), 0);
