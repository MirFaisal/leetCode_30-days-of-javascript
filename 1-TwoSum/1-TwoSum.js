// Last updated: 8/26/2025, 1:22:24 AM
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let diff = target - num;
    let index = nums.indexOf(diff);
    if (index !== -1 && index !== i) {
      return [i, index];
    }
  }
};