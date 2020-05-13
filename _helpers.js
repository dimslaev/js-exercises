// The sum of consecutive integers from 0 to n
const consecutiveIntegersSum = (n * (n + 1)) / 2;

// The number of integers divisible by K from 0 n
const n = 9;
const K = 2;
const integersDivisibleByK = Math.floor(B / K);

// large array
const largeArray = [];
for (let i = -10000; i <= 10000; i++) {
  if (i !== 5000) {
    largeArray.push(i * 1000000);
  }
}

// prefix sums
function prefixSums(A) {
  let i = 0,
    l = A.length,
    P = new Array(l),
    sum = A[0];

  P[0] = sum;

  while (++i < l) {
    sum += A[i];
    P[i] = sum;
  }

  return P;
}
