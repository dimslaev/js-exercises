module.exports = {
  createArr,
  uniqueArr,
  permute,
};
function createArr(n) {
  return [...Array(n).keys()];
}

function uniqueArr(arr) {
  return [...new Set(arr)];
}

function permute(numArr) {
  const result = [];

  if (numArr.length === 0) return [];
  if (numArr.length === 1) return [numArr];

  for (let i = 0; i < numArr.length; i++) {
    const curr = numArr[i];
    const remaining = numArr.slice(0, i).concat(numArr.slice(i + 1));

    const remPermutations = permute(remaining);

    for (let j = 0; j < remPermutations.length; j++) {
      result.push([curr].concat(remPermutations[j]));
    }
  }

  return result;
}
