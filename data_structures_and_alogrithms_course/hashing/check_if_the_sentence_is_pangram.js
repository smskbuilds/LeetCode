/* 

A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:

Input: sentence = "leetcode"
Output: false
 

Constraints:

1 <= sentence.length <= 1000
sentence consists of lowercase English letters.

*/

/**
 * @param {string} sentence
 * @return {boolean}
 */

function checkIfPangram(sentence) {
    let allLetters = 'thequickbrownfoxjumpsoverthelazydog';
    let letterSet = new Set();
    for (const letter of sentence) {
        letterSet.add(letter);
    }
    for (const letter of allLetters) {
        if (!letterSet.has(letter)) return false;
    }
    return true;
}

let testSentence = 'thequickbrownfoxjumpsoverthelazydog';

checkIfPangram(testSentence);
