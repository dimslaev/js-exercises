const assert = require("node:assert").strict;

/**
 * Have the function BracketMatcher(str) take the str
 * parameter being passed and return 1 if the brackets
 * are correctly matched and each one is accounted for.
 * Otherwise return 0.
 * For example: if str is "(hello (world))", then the
 * output should be 1, but if str is "((hello (world))"
 * the the output should be 0 because the brackets do not
 * correctly match up. Only "(" and ")" will be used as
 * brackets. If str contains no brackets return 1.
 * Examples
 * Input: "(coder)(byte))"
 * Output: 0
 * Input: "(c(oder)) b(yte)"
 * Output: 1
 */

function BracketMatcher(str) {
  let open = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      open++;
    }
    if (str[i] === ")") {
      open--;
    }
    if (open < 0) return 0;
  }

  return open !== 0 ? 0 : 1;
}

assert.equal(BracketMatcher("hello()"), 1);
assert.equal(BracketMatcher("one(bracket)"), 1);
assert.equal(BracketMatcher("coder(b)(y)(t)(e))"), 0);
assert.equal(BracketMatcher("()coderbyte() yes()"), 1);
assert.equal(BracketMatcher("dogs and cats"), 1);
assert.equal(BracketMatcher("01()01()01()"), 1);
assert.equal(BracketMatcher("the color re(d))()(()"), 0);
assert.equal(BracketMatcher("letter(s) gal(o)(r)((e)"), 0);
assert.equal(BracketMatcher("three let(t)ers"), 1);
assert.equal(BracketMatcher("twice thri(c)(e)()()"), 1);
