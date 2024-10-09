/* 

A parentheses string is valid if and only if:

It is the empty string,
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.

For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a closing parenthesis to be "())))".
Return the minimum number of moves required to make s valid.

 

Example 1:

Input: s = "())"
Output: 1
Example 2:

Input: s = "((("
Output: 3
 

Constraints:

1 <= s.length <= 1000
s[i] is either '(' or ')'.

*/

/**
 * @param {string} s
 * @return {number}
 */

function minAddToMakeValid(s) {
    let stack = [];
    let ans = 0;
    for (c of s) {
        if (!stack.length) {
            stack.push(c);
        } else if (stack[stack.length - 1] === ')') {
            stack.pop();
            stack.push(c);
            ans++;
        } else if (stack[stack.length - 1] === '(' && c === ')') {
            stack.pop();
            continue;
        } else {
            stack.push(c);
        }
    }
    return ans + stack.length;
}

minAddToMakeValid('()()()()()(((');
