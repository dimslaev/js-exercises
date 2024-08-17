const assert = require("node:assert").strict;

// Have the function RunLength(str) take the str parameter
// being passed and return a compressed version of the string
// using the Run-length encoding algorithm. This algorithm works
// by taking the occurrence of each repeating character and outputting
// that number along with a single character of the repeating sequence.
// For example: "wwwggopp" would return 3w2g1o2p. The string will not
// contain any numbers, punctuation, or symbols.

function RunLength(str) {
  const arr = str.split("");
  const result = [];

  function helper(strArr) {
    if (strArr.length === 0) return;
    let count = 1;
    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i] === strArr[i + 1]) {
        count += 1;
      } else {
        result.push(`${count}${strArr[i]}`);
        return helper(strArr.slice(i + 1));
      }
    }
  }

  helper(arr);

  return result.join("");
}

assert.equal(RunLength("aabbcc"), "2a2b2c");
assert.equal(RunLength("code"), "1c1o1d1e");
assert.equal(RunLength("mouses"), "1m1o1u1s1e1s");
assert.equal(RunLength("aaaaaaabbbeiiiiggggg"), "7a3b1e4i5g");
assert.equal(RunLength("coolthree"), "1c2o1l1t1h1r2e");
assert.equal(RunLength("swept"), "1s1w1e1p1t");
assert.equal(RunLength("yesssssnomaybe"), "1y1e5s1n1o1m1a1y1b1e");
assert.equal(RunLength("zzzaaappeefffffffmfgg"), "3z3a2p2e7f1m1f2g");
assert.equal(RunLength("abqq"), "1a1b2q");
assert.equal(RunLength("s"), "1s");
