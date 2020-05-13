function solution(A) {
  var shortest = A.length;
  var arr = [];
  var unique = [];

  for (var i = 0; i < A.length; i++) {
    if (!unique.includes(A[i])) unique.push(A[i]);
  }

  for (var i = 0; i < A.length - 1; i++) {
    arr = A.slice(i, A.length - 1);
    checkShortest(arr);
  }

  function checkShortest(arr) {
    var allPresent = true;
    for (var i = 0; i < unique.length; i++) {
      if (!arr.includes(unique[i])) allPresent = false;
    }

    if (allPresent) {
      if (arr.length < shortest) {
        shortest = arr.length;
      }
    }
  }
  return shortest;
}

console.log(solution([7, 3, 7, 3, 1, 3, 4, 1]));
console.log(solution([2, 1, 1, 3, 2, 1, 1, 3]));
