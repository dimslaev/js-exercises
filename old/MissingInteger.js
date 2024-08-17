// Given an array A of N integers, return the smallest positive integer (greater than 0)
// that does not occur in A.

function solution(A) {
  var min = 1;

  A.sort(function(a, b) {
    return a - b;
  });

  for (var i in A) {
    if (A[i] > -1 && A[i] === min) {
      min++;
    }
  }

  return min;
}

console.log(solution([2, 2, 2, 11, 4]));
// console.log(solution([1, 2, 3]));
// console.log(solution([1, 3, 6, 4, 1, 2]));
// console.log(solution([-1, -3, -6, -4, -1, -2, -5, 1, 2]));
