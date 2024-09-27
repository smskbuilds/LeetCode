/* 

Example 1: Given an array of positive integers nums and an integer k, 
find the length of the longest subarray whose sum is less than or equal to k. 
This is the problem we have been talking about above. We will now formally solve it.

*/

function findLongestSubArray(arr, k) {
    let left = 0;
    let curr = 0;
    let ans = 0;
    for (let right = 0; right < arr.length; right++) {
        curr += arr[right];
        while (curr > k) {
            curr -= left;
            left++;
        }
        ans = Math.max(ans, right - left + 1);
    }
    return ans;
}

console.log(findLongestSubArray([6, 10], 5));
