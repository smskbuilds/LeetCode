/* 

Example 1: Given a string s, return true if it is a palindrome, false otherwise.

A string is a palindrome if it reads the same forward as backward. That means, after reversing it, it is still the same string. For example: "abcdcba", or "racecar".

*/

function palindromeCheckSlow(s) {
    let left = 0,
        right = s.length - 1;
    let leftValues = [],
        rightValues = [];
    while (left < right) {
        leftValues.push(s[left]);
        rightValues.push(s[right]);
        left++, right--;
    }
    leftValues = leftValues.join('');
    rightValues = rightValues.join('');
    if (leftValues == rightValues) {
        return true;
    } else {
        return false;
    }
}

function palindromeCheckFast(s) {
    let left = 0,
        right = s.length - 1;
    while (left < right) {
        if (s[left] != s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

testString = 'racecar';
console.log(palindromeCheckSlow(testString));
console.log(palindromeCheckFast(testString));
