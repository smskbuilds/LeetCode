/* 

Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
0 <= k <= nums.length

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function longestOnes(nums, k) {
    let left = 0;
    let curr = 0;
    let ans = 0;
    for (let right = 0; right < nums.length; right++) {
        curr += nums[right];
        while (curr + k < right - left + 1) {
            curr -= nums[left];
            left++;
        }
        ans = Math.max(ans, right - left + 1);
    }
    return ans;
}

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
