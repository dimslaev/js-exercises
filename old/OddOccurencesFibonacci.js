// Fibonacci
// The Fibonacci sequence begins like this:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// (each number is the sum of the previous two)

// What is the sum of all odd numbers in the Fibonacci sequence that are less
// than 10,000?

function oddOccurencesInFibonacci(X) {
  let prev = 0;
  let curr = 1;
  let result = 0;

  while (curr <= X) {
    if (curr % 2 !== 0) {
      result += curr;
    }

    curr += prev;
    prev = curr - prev;
  }

  return result;
}

const solution = oddOccurencesInFibonacci(10000);

console.log(solution);
