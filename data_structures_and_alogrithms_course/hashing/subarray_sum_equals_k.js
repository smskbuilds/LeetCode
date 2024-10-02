/* 

Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
 

Constraints:

1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Note: this answer currently doesn't work. I know there is a valid implementation using a map - trying to see if I can do it with just a prefix sum...

function subarraySum(nums, k) {
    let prefix = [0];
    for (let i = 1; i < nums.length + 1; i++) {
        prefix.push(nums[i - 1] + prefix[i - 1]);
    }
    let ans = 0;
    let left = 1;

    for (let right = 1; right < nums.length + 1; right++) {
        if (prefix[right] - prefix[left - 1] == k) {
            ans++;
            continue;
        }
        while (prefix[right] - prefix[left - 1] > k) {
            left++;
            if (left > right) continue;
            if (prefix[right] - prefix[left - 1] == k) {
                ans++;
            }
        }
    }
    return ans;
}

subarraySum([1], 0);
