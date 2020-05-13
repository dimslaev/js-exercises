

function solution(A) {
  A.sort((a, b) => a - b);

  var distinct = 0;
  for (var i = 0; i < A.length; i++) {
    if (A[i] !== A[i + 1]) distinct++;
  }

  return distinct;
}

console.log(solution([2, 2, 1, 3, 1, 1, 3, 5]));
