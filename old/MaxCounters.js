// You are given N counters, initially set to 0, and you have two possible operations on them:
// increase(X) − counter X is increased by 1,
// max counter − all counters are set to the maximum value of any counter.
// A non-empty array A of M integers is given. This array represents consecutive operations:
// if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
// if A[K] = N + 1 then operation K is max counter.
// Given an integer N and a non-empty array A consisting of M integers,
// return a sequence of integers representing the values of the counters.

function solution(N, A) {
  let counters = new Array(N).fill(0);
  let maxCount = 0;

  for (let i = 0; i < A.length; i++) {
    const counter = A[i];
    if (counter >= 1 && counter <= N) {
      let counterValue = counters[counter - 1];
      counterValue++;
      if (counterValue > maxCount) maxCount = counterValue;
    } else if (counter === N + 1) {
      counters = new Array(N).fill(maxCount);
    }
  }

  return counters;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));
