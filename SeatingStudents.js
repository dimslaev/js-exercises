/**
 * Have the function SeatingStudents(arr) read the array of integers
 * stored in arr which will be in the following format: [K, r1, r2, r3, ...]
 * where K represents the number of desks in a classroom, and the rest of
 * the integers in the array will be in sorted order and will represent the desks
 * that are already occupied. All of the desks will be arranged in 2 columns,
 * where desk #1 is at the top left, desk #2 is at the top right, desk #3 is below #1,
 * desk #4 is below #2, etc.
 * Your program should return the number of ways 2 students can be seated next to each other.
 * This means 1 student is on the left and 1 student on the right, or 1 student is directly
 * above or below the other student.
 */

const assert = require("node:assert").strict;

function SeatingStudents(arr) {
  const has = (array, i) => array.indexOf(i) > -1;
  const K = arr[0];
  const occupied = arr.slice(1);
  const free = [...Array(K).keys()]
    .map((k) => k + 1)
    .filter((k) => !has(occupied, k));
  const combs = [];

  const insert = (i1, i2) => {
    const str1 = `${i1}${i2}`;
    const str2 = `${i2}${i1}`;
    if (!has(combs, str1) && !has(combs, str2)) {
      combs.push(str1);
    }
  };

  for (let i = 1; i <= K; i++) {
    if (!has(free, i)) continue;
    if (i % 2 !== 0) {
      if (has(free, i + 2)) insert(i, i + 2);
      if (has(free, i - 2)) insert(i, i - 2);
      if (has(free, i + 1)) insert(i, i + 1);
    } else {
      if (has(free, i + 2)) insert(i, i + 2);
      if (has(free, i - 2)) insert(i, i - 2);
      if (has(free, i - 1)) insert(i, i - 1);
    }
  }

  return combs.length;
}

assert.equal(SeatingStudents([12, 2, 6, 7, 11]), 6);
assert.equal(SeatingStudents([6, 4]), 4);
assert.equal(SeatingStudents([8, 1, 8]), 6);
assert.equal(SeatingStudents([4]), 4);
assert.equal(SeatingStudents([4, 1, 2, 3, 4]), 0);
assert.equal(SeatingStudents([10, 6, 9]), 8);
assert.equal(SeatingStudents([14, 14]), 17);
assert.equal(SeatingStudents([2]), 1);
assert.equal(SeatingStudents([14, 4, 7, 9, 14]), 9);
assert.equal(SeatingStudents([20, 3, 4, 7, 9, 12, 14, 17]), 10);
