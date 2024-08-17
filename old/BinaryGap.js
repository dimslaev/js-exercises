// Write a function that, given a positive integer N, returns the length of its longest binary gap.
// The function should return 0 if N doesn't contain a binary gap.
// For example, given N = 1041 the function should return 5, because N has
// binary representation 10000010001 and so its longest binary gap is of length 5.
// Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

function solution(A) {
  var bin = Math.abs(num).toString(2),
    finalMax = 0,
    currentMax;

  for (var i = 0; i < bin.length; i++) {
    currentMax = 0;
    while (bin[i] === "0") {
      ++currentMax && ++i;
    }
    finalMax = Math.max(finalMax, currentMax);
  }
  return finalMax;
}

console.log(solution(1)); // 1 //=> 0
console.log(solution(5)); // 101 //=> 1
console.log(solution(6)); // 110 //=> 1
console.log(solution(19)); // 10011 //=> 2
console.log(solution(1041)); // 10000010001 //=> 5
console.log(solution(6291457)); // 11000000000000000000001 //=> 20
console.log(solution(1376796946)); // 1010010000100000100000100010010 //=> 5
console.log(solution(1610612737)); // 1100000000000000000000000000001 //=> 28
