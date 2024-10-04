/* 

Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

 

Example 1:



Input: text = "nlaebolko"
Output: 1
Example 2:



Input: text = "loonbalxballpoon"
Output: 2
Example 3:

Input: text = "leetcode"
Output: 0
 

Constraints:

1 <= text.length <= 104
text consists of lower case English letters only.
 

Note: This question is the same as 2287: Rearrange Characters to Make Target String.

*/

/**
 * @param {string} text
 * @return {number}
 */

function maxNumberOfBalloons(text) {
    const letterCounter = new Map();
    for (const letter of text) {
        letterCounter.set(letter, (letterCounter.get(letter) || 0) + 1);
    }
    let goalText = 'balloon';
    let ans = 0;
    let i = 0;
    while (true) {
        if (i >= goalText.length) {
            i = 0;
            ans++;
        }
        if (!letterCounter.get(goalText[i])) {
            break;
        }
        letterCounter.set(goalText[i], letterCounter.get(goalText[i]) - 1);
        i++;
    }
    return ans;
}

console.log(maxNumberOfBalloons('ballon'));
