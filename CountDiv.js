// Write a function:
// function solution(A, B, K);
// that, given three integers A, B and K, returns the number of integers within the range [A..B]
// that are divisible by K:

function solution(A, B, K) {
  // O(N * M)
  // var max = 0;
  // for (var i = A; i <= B; i++) {
  //   if (i % K === 0) {
  //     max++;
  //   }
  // }
  // return max;

  // O(N)
  var count = 0,
    div1 = 0,
    div2 = 0;

  div1 = Math.floor(A / K);
  div2 = Math.floor(B / K);

  count = div2 - div1;

  console.log("%", A % K);

  if (A % K === 0) count++;

  return count;
}
console.log(solution(0, 10, 2));
// console.log(solution(0, 1, 2));
// console.log(solution(0, 0, 2));
// console.log(solution(6, 11, 2));
// console.time("big integers");
// console.log(solution(100, 12300000, 2));
// console.timeEnd("big integers");
