/* 

Example 3: Given two sorted integer arrays arr1 and arr2, return a new array that combines both of them and is also sorted.

*/

function mergeSortedArrays(arr1, arr2) {
    let i = 0,
        j = 0;
    let ans = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            ans.push(arr1[i]);
            i++;
        } else {
            ans.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        ans.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        ans.push(arr2[j]);
        j++;
    }

    return ans;
}

testArr1 = [1, 1, 1, 2, 5, 6, 6, 6, 7, 8, 8];
testArr2 = [1, 1, 2, 2, 2, 3, 3, 3, 7, 7, 7, 9, 9, 9];
console.log(mergeSortedArrays(testArr1, testArr2));
