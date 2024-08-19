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

function permute(arr) {
  if (arr.length === 0) return [];
  if (arr.length === 1) return [arr];

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    const rems = arr.slice(0, i).concat(arr.slice(i + 1));

    const remPerms = permute(rems);

    for (let j = 0; j < remPerms.length; j++) {
      result.push([curr].concat(remPerms[j]));
    }
  }

  return result;
}
