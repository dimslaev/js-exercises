/**
 *
 * @param {Array[Number]} nums // e.g. [1,2,3]
 * @returns Array[Array[Number]] [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,2,1], [3,1,2]]
 */

function permute(nums) {
  const result = [];

  if (nums.length === 0) return [];
  if (nums.length === 1) return [nums];

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const rems = nums.slice(0, i).concat(nums.slice(i + 1));

    const remPerms = permute(rems);

    for (let j = 0; j < remPerms.length; j++) {
      result.push([curr].concat(remPerms[j]));
    }
  }

  return result;
}

console.log(permute([1, 2, 3]));
