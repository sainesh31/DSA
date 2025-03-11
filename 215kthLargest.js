// 1

// var findKthLargest = function (nums, k) {
//   let x = nums.sort((a, b) => a - b);
//   return nums[nums.length - k];
// };

// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 3));

// 2

// var findKthLargest = function (nums, k) {
//   debugger;
//   let max = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > max) {
//       max = nums[i];
//     }
//   }
//   console.log(k);
// };

// findKthLargest([3, 2, 1, 5, 6, 4], 3);
