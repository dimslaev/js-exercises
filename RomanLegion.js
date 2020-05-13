// Legionaries
// In the range 1 - 13 (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13) the digit 1
// occurs 6 times.

// In the range, 1 - 2,660 (half the number of Romans in a legion), expressed in
// Roman numerals, how many times does the numeral “X” occur?

const RomanLegion = [];

for (let i = 1; i <= 2660; i++) {
  const roman = romanize(i);
  RomanLegion.push(roman);
}

function countOccurencesOfX(Arr) {
  return Arr.join("").match(new RegExp("X", "g")).length || 0;
}

function romanize(num) {
  if (isNaN(num)) return NaN;
  const digits = String(+num).split("");
  const key = [
    "",
    "C",
    "CC",
    "CCC",
    "CD",
    "D",
    "DC",
    "DCC",
    "DCCC",
    "CM",
    "",
    "X",
    "XX",
    "XXX",
    "XL",
    "L",
    "LX",
    "LXX",
    "LXXX",
    "XC",
    "",
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
  ];
  let roman = "";
  let i = 3;

  while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;
}

const solution = countOccurencesOfX(RomanLegion);

console.log(solution);
