// Given an array A of consecutive integers, return the value of the missing element.

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  var i, next;

  A.sort((a, b) => a - b);

  next = 1;
  for (i = 0; i < A.length; i++) {
    if (A[i] != next) return next;
    next++;
  }

  return next;
}

console.log(solution([5, 2, 3, 1])); // 4
console.log(solution([])); // 1
console.log(solution([3, 1])); // 2
console.log(solution([2])); // 1
console.log(solution([1, 2, 3, 4, 5])); // 6
console.log(solution([100000, 999999, 999998, 999997, 999996])); // 1
