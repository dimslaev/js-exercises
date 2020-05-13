// A frog is at position 0, and wants to get to position X (e.g. =5),
// by jumping on leaves that fall in between every second.
// A = positions of fallen leaves / second:
// A[1] = 3
// A[2] = 1
// A[3] = 4
// A[4] = 2
// A[5] = 3
// A[6] = 5
// A[7] = 4
// Find the earliest time when a frog can jump to the other side of a river.

function solution(X, A) {
  var sum = 0;
  var expected = (X * (X + 1)) / 2; // The sum of consecutive integers from 0 to n
  var positions = [];
  for (var i in A) {
    var current = A[i];
    if (!positions[current]) {
      positions[current] = true;
      sum += current;
      if (sum == expected) {
        return +i;
      }
    }
  }
  return -1;
}

console.log(solution(5, [1, 3, 1, 4, 2, 3, 5, 4]));
console.log(solution(100000, [100000]));
