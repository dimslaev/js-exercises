// Starting with the following array (with N elements):
// create an array containing all possible combinations

var array = ["apple", "banana", "lemon", "mango"];

// using flatMap
var result = array.flatMap((v, i) =>
  array.slice(i + 1).map((w) => v + " " + w)
);

console.log(result);

// using reduce
var array2 = ["apple", "banana", "lemon", "mango"];

var result2 = array.reduce((acc, v, i) => {
  const other = array.slice(i + 1);
  const combs = other.map((o) => v + " " + o);

  return acc.concat(combs);
}, []);

// using double for loop

let array = ["apple", "banana", "lemon", "mango"];
let results = [];

// Since you only want pairs, there's no reason
// to iterate over the last element directly
for (let i = 0; i < array.length - 1; i++) {
  // This is where you'll capture that last value
  for (let j = i + 1; j < array.length; j++) {
    results.push(`${array[i]} ${array[j]}`);
  }
}
