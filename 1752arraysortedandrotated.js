/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let count = 0;
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] > nums[(i + 1) % n]) {
      count++;
    }
    if (count > 1) {
      return false;
    }
  }

  return true;
};
console.log(check([3, 4, 5, 1, 2])); // Output should be true
console.log(check([2, 1, 3, 4])); // Output should be false
console.log(check([1, 2, 3])); // Output should be true
console.log(check([1, 1, 1])); // Output should be true
