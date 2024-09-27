/* 

Example 2: You are given a binary string s (a string containing only "0" and "1"). You may choose up to one "0" and flip it to a "1". What is the length of the longest substring achievable that contains only "1"?

For example, given s = "1101100111", the answer is 5. If you perform the flip at index 2, the string becomes 1111100111.

*/

// How I initially solved the problem.
// I am using curr to store the current value of the subarray.

function findLength(s) {
    let left = 0;
    let curr = 0;
    let ans = 0;
    for (let right = 0; right < s.length; right++) {
        curr += parseInt(s[right]);
        while (curr < right - left) {
            curr -= parseInt(s[left]);
            left++;
        }
        ans = Math.max(ans, right - left + 1);
    }
    return ans;
}

console.log(findLength('110110101111111'));

// How the course solved the problem.

var findLengthCourseAnswer = function (s) {
    // curr is the current number of zeros in the window
    let left = 0,
        curr = 0,
        ans = 0;
    for (let right = 0; right < s.length; right++) {
        if (s[right] == '0') {
            curr++;
        }

        while (curr > 1) {
            if (s[left] == '0') {
                curr -= 1;
            }
            left++;
        }

        ans = Math.max(ans, right - left + 1);
    }

    return ans;
};
