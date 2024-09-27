/* 

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
 

Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

I'm going to try the trivial solution first, then see if I can come up with a faster solution!

*/

function sortedSquares(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i] *= nums[i];
    }
    return nums.sort((a, b) => a - b);
}

function fasterSortedSquares(nums) {
    let negativeNums = [];
    reverseArray(nums);
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < 0) {
            negativeNums.push(nums.pop());
        }
    }
    for (let j = 0; j < negativeNums.length; j++) {
        negativeNums[j] = Math.abs(negativeNums[j]);
    }
    let i = 0,
        j = 0;
    let sortedNums = [];
    while (i < nums.length && j < negativeNums.length) {
        if (nums[i] > negativeNums[j]) {
            sortedNums.push(nums[i]);
            i++;
        } else {
            sortedNums.push(negativeNums[j]);
            j++;
        }
    }

    while (i < nums.length) {
        sortedNums.push(nums[i]);
        i++;
    }

    while (j < negativeNums.length) {
        sortedNums.push(negativeNums[j]);
        j++;
    }

    reverseArray(sortedNums);
    for (let k = 0; k < sortedNums.length; k++) {
        sortedNums[k] *= sortedNums[k];
    }
    return sortedNums;
}

function reverseArray(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
    }
    return arr;
}

testNums = Array.from({ length: 40 }, () => Math.floor(Math.random() * 40));

console.log(testNums);
console.log(fasterSortedSquares(testNums));
