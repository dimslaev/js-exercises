function solution(A) {
  const makeIntegerOccurrencesMap = (map, nextInteger) => {
    const isMissingKey = key => map[key] === undefined;

    if (isMissingKey(nextInteger)) {
      map[nextInteger] = 0;
    }

    ++map[nextInteger];

    return map;
  };

  const isOdd = number => number % 2 !== 0;
  const integerOccurrencesMap = A.reduce(makeIntegerOccurrencesMap, {});

  return +Object.keys(integerOccurrencesMap).find(integer =>
    isOdd(integerOccurrencesMap[integer]),
  );
}

function solution(A) {
  var obj = {};

  for (let i = 0; i < A.length; i++) {
    var n = A[i];
    obj[n] = obj[n] ? obj[n] + 1 : 1;
  }

  for (let i = 0; i < Object.keys(obj).length; i++) {
    var key = Object.keys(obj)[i];
    var value = obj[key];

    if (value % 2 > 0) {
      return +key;
    }
  }
}

// const arr = new Array(1000000);
// const testA = [];

// for (let i = 0; i < arr.length; i++) {
//   let n = i * 100000;

//   if (i !== 0 && i !== arr.length - 1) {
//     testA.push(n);
//     testA.push(n);
//   } else if (i === 0) {
//     testA.push(50000);
//   }
// }

console.log(solution([9, 3, 9, 3, 9, 7, 9]));

// console.log(solution([12, 13, 13, 13, 12, 12, 1]));
// console.time("testA");
// console.log(solution(testA));
// console.timeEnd("testA");
