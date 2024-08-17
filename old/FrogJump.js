// Given three integers X (initial position), Y (destination) and D (distance of a jump),
// returns the minimal number of jumps from position X to a position equal to or greater than Y.

function solution(X, Y, D) {
  // write your code in JavaScript (Node.js 8.9.4)

  const distanceXY = Y - X;

  const numberOfJumps = distanceXY / D;

  return Math.ceil(numberOfJumps);
}

console.log(solution(10, 80, 30));
console.log(solution(10, 85, 30));
