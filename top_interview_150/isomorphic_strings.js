/* 

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"

Output: true

Explanation:

The strings s and t can be made identical by:

Mapping 'e' to 'a'.
Mapping 'g' to 'd'.
Example 2:

Input: s = "foo", t = "bar"

Output: false

Explanation:

The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

Example 3:

Input: s = "paper", t = "title"

Output: true

 

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isIsomorphic(s, t) {
    let sMap = new Map();
    let tMap = new Map();
    for (i = 0; i < s.length; i++) {
        if (!sMap.get(s[i]) && !tMap.get(t[i])) {
            sMap.set(s[i], t[i]);
            tMap.set(t[i], s[i]);
        } else if (s[i] !== tMap.get(t[i])) {
            return false;
        }
    }
    return true;
}

console.log(isIsomorphic('bbbaaaba', 'aaabbbba'));
