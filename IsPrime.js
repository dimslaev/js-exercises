const assert = require("node:assert").strict;

// A prime number is > 1 and divisible only by itself

function isPrime(n) {
  if (n < 2) return false;
  for (i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

assert.equal(isPrime(1), false);
assert.equal(isPrime(2), true);
assert.equal(isPrime(3), true);
assert.equal(isPrime(5), true);
assert.equal(isPrime(6), false);
assert.equal(isPrime(11), true);
assert.equal(isPrime(101), true);
