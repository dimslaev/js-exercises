const assert = require("node:assert").strict;
const { permute } = require("./_helpers");

// Have the function PrimeChecker(num) take num and return 1
// if any arrangement of num comes out to be a prime number, otherwise return 0.
// For example: if num is 910, the output should be 1 because 910 can be arranged
// into 109 or 019, both of which are primes.

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function PrimeChecker(num) {
  const numArr = String(num)
    .split("")
    .map((n) => parseInt(n));
  const perms = permute(numArr);

  for (let i = 0; i < perms.length; i++) {
    if (isPrime(parseInt(perms[i].join("")))) {
      return 1;
    }
  }
  return 0;
}

assert.equal(PrimeChecker(9), 0);
assert.equal(PrimeChecker(11), 1);
assert.equal(PrimeChecker(30), 1);
assert.equal(PrimeChecker(772), 1);
assert.equal(PrimeChecker(812), 1);
assert.equal(PrimeChecker(76), 1);
assert.equal(PrimeChecker(44), 0);
assert.equal(PrimeChecker(100), 0);
assert.equal(PrimeChecker(104), 1);
assert.equal(PrimeChecker(908), 1);
