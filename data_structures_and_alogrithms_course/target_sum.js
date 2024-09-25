/* 

Example 2: Given a sorted array of unique integers and a target integer, return true if there exists a pair of numbers that sum to target, false otherwise. This problem is similar to Two Sum. (In Two Sum, the input is not sorted).

For example, given nums = [1, 2, 4, 6, 8, 9, 14, 15] and target = 13, return true because 4 + 9 = 13.

First solution is brute force with O(n^2) time complexity & O(1) space complexity.

Second solution leverages the benefits of having a sorted array. It has a time complexity of O(n) & a space complexity of O(1)

*/

function targetSumBruteForce(nums, target) {
    let loopCounter = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] > target) break;
            loopCounter++;
            if (nums[i] + nums[j] == target) {
                // console.log(loopCounter);
                return true;
            }
        }
    }
    // console.log(loopCounter);
    return false;
}

function targetSumLeveragingSortedArray(nums, target) {
    let left = 0,
        right = nums.length - 1;
    while (left < right) {
        if (nums[left] + nums[right] == target) {
            return true;
        }
        if (nums[left] + nums[right] < target) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}

let testNums = [1, 2, 4, 6, 8, 9, 14, 15];
console.log(targetSumBruteForce(testNums, 13));
console.log(targetSumLeveragingSortedArray(testNums, 13));
