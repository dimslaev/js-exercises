// Any integer P, such that 0 < P < N, splits the array into two non-empty parts
// The difference between the two parts is the absolute difference between the sum
// of the first part and the sum of the second part.
// Given a non-empty array A of N integers, return the minimal difference that can be achieved.

function solution(A) {
  let leftSum = 0;
  let rightSum = A.reduce((a, b) => a + b);
  let answer = null;
  for (let i = 0; i < A.length - 1; i++) {
    leftSum += A[i];
    rightSum -= A[i];
    const diff = Math.abs(leftSum - rightSum);
    if (answer === null || answer > diff) {
      answer = diff;
    }
  }
  return answer;
}

console.log(solution([3, 1, 2, 4, 3]));
console.log(solution([-1000, -500, 300, 800, 100]));
