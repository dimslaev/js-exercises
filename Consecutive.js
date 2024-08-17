const assert = require("node:assert").strict;

// Have the function Consecutive(arr) take the array of integers
// stored in arr and return the minimum number of integers needed
// to make the contents of arr consecutive from the lowest number
// to the highest number. For example: If arr contains [4), 8, 6]
// then the output should be 2 because two numbers need to be added
// to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8.
// Negative numbers may be entered as parameters and no array will have less than 2 elements.

function Consecutive(arr) {
  const result = [];

  const sorted = arr.sort((a, b) => a - b);

  const first = sorted[0];
  const last = sorted[arr.length - 1];

  for (let i = first; i <= last; i++) {
    result.push(i);
  }

  return result.length - arr.length;
}

assert.equal(Consecutive([1, 2, 3, 4]), 0);
assert.equal(Consecutive([2, 5]), 2);
assert.equal(Consecutive([0, 3]), 2);
assert.equal(Consecutive([1, 23, 5]), 20);
assert.equal(Consecutive([100, 105, 110]), 8);
assert.equal(Consecutive([-4, -3, 5]), 7);
assert.equal(Consecutive([5, 12, 15, 17, 18, 22]), 12);
assert.equal(Consecutive([2, 3]), 0);
assert.equal(Consecutive([-4, 10]), 13);
assert.equal(Consecutive([1, 5, 9, 10, 11, 12, 14]), 7);
