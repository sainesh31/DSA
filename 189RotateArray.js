/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length; // Ensure k is within the bounds of the array length
  if (k === 0) return; // If k is 0, no need to rotate

  // Get the last k elements
  let array1 = nums.slice(-k);
  // Get the elements from the start to the length minus k
  let array2 = nums.slice(0, nums.length - k);

  // Replace the entire nums array with the elements of array1 followed by array2
  nums.splice(0, nums.length, ...array1, ...array2);
};

let nums = [3, 2, 1, 5, 6, 4];
rotate(nums, 3);
console.log(nums); // Output: [5, 6, 4, 3, 2, 1]
