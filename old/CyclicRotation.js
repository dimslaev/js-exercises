// Rotate an array to the right by a given number of steps.
// Given an array A consisting of N integers and an integer K, return the array A rotated K times.

function solution(A, K) {
  // if A is meant to be shifted by its own length (K) then just return the array
  if (A.length === K || K === 0) {
    return A;
  }

  for (let i = 0; i < K; i++) {
    let lastElement = A[A.length - 1];
    A.unshift(lastElement);
    A.pop();
  }
  return A;
}
