/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let nonZeroPointer = 0; // Points to the position where the next non-zero element should be placed

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // If the current element is non-zero, move it to the position indicated by nonZeroPointer
      nums[nonZeroPointer] = nums[i];
      // If the current position and nonZeroPointer are different, set the current position to zero
      if (nonZeroPointer !== i) {
        nums[i] = 0;
      }
      nonZeroPointer++; // Increment nonZeroPointer
    }
  }
};

// Test the function
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]
