/* An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.

 

Example 1:

Input: nums = [1,2,2,3]
Output: true
Example 2:

Input: nums = [6,5,4,4]
Output: true
Example 3:

Input: nums = [1,3,2]
Output: false
 

Constraints:

1 <= nums.length <= 105
-105 <= nums[i] <= 105 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
    if (nums.length === 1 || nums.length === 2) return true;
    let direction = '';
    let i = 1;
    while (direction === '' && i < nums.length) {
        if (nums[i] === nums[i - 1]) {
            i++;
            continue;
        }
        if (nums[i] > nums[i - 1]) {
            i++;
            direction = 'increasing';
            continue;
        }
        if (nums[i] < nums[i - 1]) {
            i++;
            direction = 'decreasing';
            continue;
        }
    }
    for (; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue;
        if (nums[i] > nums[i - 1] && direction === 'decreasing') return false;
        if (nums[i] < nums[i - 1] && direction === 'increasing') return false;
    }
    return true;
};

console.log(isMonotonic([1, 3, 2]));
