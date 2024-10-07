/* 

Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.

 

Example 1:

Input: nums = [5,7,3,9,4,9,8,3,1]
Output: 8
Explanation: The maximum integer in the array is 9 but it is repeated. The number 8 occurs only once, so it is the answer.
Example 2:

Input: nums = [9,9,8,8]
Output: -1
Explanation: There is no number that occurs only once.
 

Constraints:

1 <= nums.length <= 2000
0 <= nums[i] <= 1000

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

function largestUniqueNumber(nums) {
    let counts = new Map();
    for (const num of nums) {
        counts.set(num, counts.get(num) + 1 || 1);
    }
    let uniqueNums = [];
    for (const [num, count] of counts) {
        if (count == 1) uniqueNums.push(num);
    }
    if (uniqueNums.length == 0) return -1;
    uniqueNums.sort((a, b) => b - a);
    return uniqueNums[0];
}

largestUniqueNumber([5, 7, 3, 9, 4, 9, 8, 3, 1]);
