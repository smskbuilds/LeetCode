/* 

670. Maximum Swap
Medium
Topics
Companies
You are given an integer num. You can swap two digits at most once to get the maximum valued number.

Return the maximum valued number you can get.

 

Example 1:

Input: num = 2736
Output: 7236
Explanation: Swap the number 2 and the number 7.
Example 2:

Input: num = 9973
Output: 9973
Explanation: No swap.
 

Constraints:

0 <= num <= 108

*/

/**
 * @param {number} num
 * @return {number}
 */

function maximumSwap(num) {
    if (num < 10) return num;
    let numArray = num.toString().split('');
    let lastIndex = new Array(10).fill(-1);

    // Store the last occurrence of each digit
    for (let i = 0; i < numArray.length; i++) {
        lastIndex[numArray[i]] = i;
    }

    // Find the rightmost larger digit to swap
    for (let i = 0; i < numArray.length; i++) {
        for (let d = 9; d > numArray[i]; d--) {
            if (lastIndex[d] > i) {
                // Swap
                [numArray[i], numArray[lastIndex[d]]] = [
                    numArray[lastIndex[d]],
                    numArray[i],
                ];
                return parseInt(numArray.join(''));
            }
        }
    }

    // No swap needed
    return num;
}

console.log(maximumSwap(2736)); // 7236
console.log(maximumSwap(9973)); // 9973
console.log(maximumSwap(98368)); // 98863
