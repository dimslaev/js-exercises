/**
 * Have the function PowerSetCount(arr) take the array of integers
 * stored in arr, and return the length of the power set (the
 * number of all possible sets) that can be generated. For example:
 * if arr is [1, 2, 3], then the following sets form the power set:
 * []
 * [1]
 * [2]
 * [3]
 * [1, 2]
 * [1, 3]
 * [2, 3]
 * [1, 2, 3]
 * You can see above all possible sets, along with the empty set,
 * are generated. Therefore, for this input, your program should
 * return 8.
 */

const assert = require("node:assert").strict;

function PowerSetCount(arr) {
  const combs = [""];

  function inner(curr, rem) {
    if (!curr && !rem.length) return;
    if (!rem.length) {
      combs.push(curr);
    } else {
      inner(curr + rem[0], rem.slice(1));
      inner(curr, rem.slice(1));
    }
  }

  inner("", arr);

  return combs.length;
}

assert.equal(PowerSetCount([5]), 2);
assert.equal(PowerSetCount([1, 2]), 4);
assert.equal(PowerSetCount([7, 6, 4]), 8);
assert.equal(PowerSetCount([1, 2, 3, 4]), 16);
assert.equal(PowerSetCount([1, 2, 3, 4, 5]), 32);
assert.equal(PowerSetCount([1, 2, 3, 4, 5, 6]), 64);
assert.equal(PowerSetCount([10, 11, 12, 13, 14, 15]), 64);
assert.equal(PowerSetCount([1, 2, 3, 4, 5, 6, 7]), 128);
assert.equal(PowerSetCount([1, 2, 3, 4, 5, 6, 7, 8]), 256);
assert.equal(PowerSetCount([1, 2, 3, 4, 5, 6, 7, 8, 9]), 512);
