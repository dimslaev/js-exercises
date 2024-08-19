const assert = require("node:assert").strict;

function createArr(n) {
  return [...Array(n).keys()];
}

function uniqueArr(arr) {
  return [...new Set(arr)];
}

function permute(arr) {
  if (arr.length === 0) return [];
  if (arr.length === 1) return [arr];

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    const rems = arr.slice(0, i).concat(arr.slice(i + 1));

    const remPerms = permute(rems);

    for (let j = 0; j < remPerms.length; j++) {
      result.push([curr].concat(remPerms[j]));
    }
  }

  return result;
}

function matchNum(str) {
  return str.match(/[0-9]/g);
}

function matchAlha(str) {
  return str.match(/[a-z]/gi);
}

function hasNum(str) {
  return /[0-9]/.test(str);
}

function hasAlpha(str) {
  return /[a-zA-z]/g.test(str);
}

function to24Hour(str) {
  const matches = str.match(/(\d{1,2}):(\d{2})([ap]m)$/i);
  let [_, hour, minutes, apm] = matches;

  hour = parseInt(hour);
  if (apm.toLowerCase() === "am" && hour === 12) {
    hour = 0;
  }
  if (apm.toLowerCase() === "pm" && hour !== 12) {
    hour += 12;
  }
  hour = String(hour).padStart(2, "0");

  return `${hour}:${minutes}`;
}

assert.deepEqual(createArr(4), [0, 1, 2, 3]);

assert.deepEqual(uniqueArr([1, 1, 0, 0, -1, -1, 33, 33]), [1, 0, -1, 33]);

assert.deepEqual(permute([1, 2, 3]), [
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1],
]);

assert.deepEqual(matchNum("1asd2das3d1a2"), ["1", "2", "3", "1", "2"]);

assert.deepEqual(matchAlha("1asd2das3d1a2"), [
  "a",
  "s",
  "d",
  "d",
  "a",
  "s",
  "d",
  "a",
]);
assert.deepEqual(matchAlha("1AaBb"), ["A", "a", "B", "b"]);

assert.equal(hasNum("a1"), true);
assert.equal(hasNum("aa"), false);

assert.equal(hasAlpha("a1"), true);
assert.equal(hasAlpha("11"), false);

assert.equal(to24Hour("2:30pm"), "14:30");
assert.equal(to24Hour("12:45am"), "00:45");
assert.equal(to24Hour("7:15am"), "07:15");

module.exports = {
  createArr,
  uniqueArr,
  permute,
  matchNum,
  matchAlha,
  hasNum,
  hasAlpha,
  to24Hour,
};
