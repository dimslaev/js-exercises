// A non-empty array A consisting of N integers is given.
// A permutation is a sequence containing each element from 1 to N once, and only once.
// Given an array A, return 1 if array A is a permutation and 0 if it is not.

function solution(A) {
  A.sort((a, b) => a - b);

  let next = 1;
  for (i = 0; i < A.length; i++) {
    if (A[i] != next) return 0;
    next++;
  }

  return 1;
}
