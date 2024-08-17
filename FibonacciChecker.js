/**
 * Have the function FibonacciChecker(num) return the string
 * yes if the number given is part of the Fibonacci sequence.
 * This sequence is defined by: Fn = Fn-1 + Fn-2), which means
 * to find Fn you add the previous two numbers up. The first
 * two numbers are 0 and 1, then comes 1, 2, 3, 5 etc. If num
 * is not in the Fibonacci sequence, return the string no.
 */

const assert = require("node:assert").strict;

function FibonacciChecker(num) {
  const seq = [0, 1];

  for (let i = 1; i <= num; i++) {
    if (seq[seq.length - 2] + seq[seq.length - 1] === i) {
      seq.push(i);
    }
  }

  return seq[seq.length - 1] === num ? "yes" : "no";
}
assert.equal(FibonacciChecker(1), "yes");
assert.equal(FibonacciChecker(8), "yes");
assert.equal(FibonacciChecker(13), "yes");
assert.equal(FibonacciChecker(12), "no");
assert.equal(FibonacciChecker(10), "no");
assert.equal(FibonacciChecker(987), "yes");
assert.equal(FibonacciChecker(986), "no");
assert.equal(FibonacciChecker(75025), "yes");
assert.equal(FibonacciChecker(1000), "no");
assert.equal(FibonacciChecker(1001), "no");
