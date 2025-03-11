/**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function (nums) {
//   let uniqueElementArray = [];
//   if (nums.length === 0) {
//     return uniqueElementArray;
//   }

//   uniqueElementArray.push(nums[0]);

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) {
//       uniqueElementArray.push(nums[i]);
//     }
//   }
//   return uniqueElementArray;
// };
// console.log(removeDuplicates([1, 1, 2]));

// 2
/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//   if (nums.length === 0) {
//     return 0;
//   }

//   let index = 1; // Start from the second element

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) {
//       nums[index] = nums[i];
//       index++;
//     }
//   }
//   console.log(nums);
//   return index;
// };

// let nums = [1, 1, 2];
// let newLength = removeDuplicates(nums);
// console.log(newLength); // Output: 2
// console.log(nums);
// console.log(nums.slice(0, newLength)); // Output: [1, 2]

// 3

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // Convert the array to a Set to remove duplicates
  let uniqueSet = new Set(nums);

  // Convert the Set back to an array
  let uniqueArray = Array.from(uniqueSet);

  console.log(uniqueSet);
  console.log(uniqueArray);

  // Modify the original array to contain the unique elements
  for (let i = 0; i < uniqueArray.length; i++) {
    nums[i] = uniqueArray[i];
  }

  // Return the length of the unique array
  return uniqueArray.length;
};

let nums = [1, 1, 2];
let newLength = removeDuplicates(nums);
console.log(newLength); // Output: 2
console.log(nums.slice(0, newLength)); // Output: [1, 2]
