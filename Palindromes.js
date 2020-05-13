// Palindromes
// A palindrome is a word, number, phrase, or other sequence of characters which reads
// the same backward as forward, such as madam, racecar, or the number 10801.
// What is the sum of all numeric palindromes that are less than 10,000?

function countPalindromes(X) {
  let sum = 0;

  for (let i = 0; i < X; i++) {
    const halves = divideInHalves(i);

    if (halves[0] === halves[1]) {
      sum += i;
    }
  }

  return sum;
}

function divideInHalves(Num) {
  const arr = Num.toString().split("");
  const length = arr.length;
  const halfIndex = length % 2 === 0 ? length / 2 : Math.floor(length / 2);

  const firstHalf = [];
  const secondHalf = [];

  arr.forEach(function (x, index) {
    if (length % 2 === 0) {
      if (index < halfIndex) {
        firstHalf.push(x);
      } else {
        secondHalf.push(x);
      }
    } else {
      if (index <= halfIndex) {
        firstHalf.push(x);
      }
      if (index >= halfIndex) {
        secondHalf.push(x);
      }
    }
  });

  return [firstHalf.join(""), secondHalf.reverse().join("")];
}

const solution = countPalindromes(10000);

console.log(solution);
