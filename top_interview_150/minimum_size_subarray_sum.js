/* 

Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
 

Constraints:

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104
 

Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).

*/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

function minSubArrayLen(target, nums) {
    let left = 0;
    let ans = 0;
    let curr = 0;
    for (let right = 0; right < nums.length; right++) {
        curr += nums[right];
        if (curr >= target) {
            if (ans) {
                ans = Math.min(ans, right - left + 1);
            } else {
                ans = right - left + 1;
            }
        }
        while (curr >= target) {
            curr -= nums[left];
            left++;
            if (curr >= target) {
                if (ans) {
                    ans = Math.min(ans, right - left + 1);
                } else {
                    ans = right - left + 1;
                }
            }
        }
    }
    return ans;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
