const assert = require("node:assert").strict;

/**
 * Have the function StringReduction(str) take the str parameter
 * being passed and return the smallest number you can get through
 * the following reduction method. The method is: Only the letters
 * a, b, and c will be given in str and you must take two different
 * adjacent characters and replace it with the third. For example
 * "ac" can be replaced with "b" but "aa" cannot be replaced with
 * anything. This method is done repeatedly until the string cannot
 * be further reduced, and the length of the resulting string is to be outputted.
 * For example: if str is "cab", then "ca" can be reduced to "b"
 * and you get "bb" (you can also reduce it to "cc"). The reduction
 * is done so the output should be 2. If str is "bcab", "bc" reduces to "a",
 * so you have "aab", then "ab" reduces to "c", and the final string "ac"
 * is reduced to "b" so the output should be 1.
 */

const alphabet = ["a", "b", "c"];

function canReduce(chars) {
  let lastChar = chars[0];

  for (let c of chars) {
    if (c !== lastChar) return true;
    lastChar = c;
  }

  return false;
}

function getThirdChar(first, second) {
  return alphabet.filter((c) => c !== first && c !== second)[0];
}

function StringReduction(str) {
  let chars = str.split("");

  for (let i = 0; i < chars.length; i++) {
    const curr = chars[i];
    const next = chars[i + 1];

    if (next && curr !== next) {
      const third = getThirdChar(curr, next);
      chars.splice(i, 2, third);

      if (!canReduce(chars)) {
        return chars.length;
      } else {
        return StringReduction(chars.join(""));
      }
    }
  }

  return chars.length;
}

assert.equal(StringReduction("c"), 1);
assert.equal(StringReduction("aaa"), 3);
assert.equal(StringReduction("abc"), 2);
assert.equal(StringReduction("bcab"), 1);
assert.equal(StringReduction("aabc"), 1);
assert.equal(StringReduction("abcabc"), 2);
assert.equal(StringReduction("abb"), 1);
assert.equal(StringReduction("aa"), 2);
assert.equal(StringReduction("ccaa"), 2);
assert.equal(StringReduction("abbcb"), 2);
