/**
 * Have the function QuestionsMarks(str) take the str string
 * parameter, which will contain single digit numbers, letters,
 * and question marks, and check if there are exactly 3
 * question marks between every pair of two numbers that add up
 *  to 10. If so, then your program should return the string
 * true, otherwise it should return the string false. If there
 * aren't any two numbers that add up to 10 in the string, then
 * your program should return false as well.
 * For example: if str is "arrb6???4xxbl5???eee5" then your
 * program should return true because there are exactly 3
 * question marks between 6 and 4, and 3 question marks between 5
 * and 5 at the end of the string.
 */

const assert = require("node:assert").strict;

function QuestionsMarks(str) {
  const clean = str.match(/[0-9?]/g).map((s) => {
    if (s === "?") return -1;
    else return parseInt(s);
  });

  let res = false;

  for (let i = 0; i < clean.length; i++) {
    const a = clean[i];
    for (let j = i + 1; j < clean.length; j++) {
      const b = clean[j];
      if (a + b === 10 && a !== -1 && b !== -1) {
        if (clean[i + 1] === -1 && clean[i + 2] === -1 && clean[i + 3] === -1) {
          res = true;
        } else {
          return false;
        }
      }
    }
  }

  return res;
}

assert.equal(QuestionsMarks("acc?7??sss?3rr1??????5"), true);
assert.equal(QuestionsMarks("aa6?9"), false);
assert.equal(QuestionsMarks("acc?7??sss?3rr1??????5"), true);
assert.equal(QuestionsMarks("aaaaaaarrrrr??????"), false);
assert.equal(QuestionsMarks("9???1???9??1???9"), false);
assert.equal(QuestionsMarks("4?5?4?aamm9"), false);
assert.equal(QuestionsMarks("5??aaaaaaaaaaaaaaaaaaa?5?5"), false);
assert.equal(QuestionsMarks("mbbv???????????4??????ddsdsdcc9?"), false);
