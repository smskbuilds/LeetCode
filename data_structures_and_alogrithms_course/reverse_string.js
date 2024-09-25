/* Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory. */

function reverseString(s) {
    let tmp = '';
    for (let i = 0; i < s.length / 2; i++) {
        tmp = s[i];
        s[i] = s[s.length - 1 - i];
        s[s.length - 1 - i] = tmp;
    }
    return s;
}

function reverseStringWithoutTmp(s) {
    for (let i = 0; i < s.length / 2; i++) {
        [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
    }
    return s;
}

let testS = ['h', 'e', 'l', 'l', 'o'];
let testT = ['h', 'e', 'l', 'l', 'o'];
console.log(reverseString(testS));
console.log(reverseStringWithoutTmp(testT));
