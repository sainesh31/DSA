/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//two sum

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};

nums =
// [1,0,-1,0,-2,2]
[2,7,4,5]

target =
9

console.log(twoSum([2,7,11,15],9))