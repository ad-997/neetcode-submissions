class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // If length of S and T are different
        if (s.length !== t.length) {
            return false
        }

        // Initialize an empty object to coutn chars
        let charCount = {}

        // Count char in the first string
        for (let char of s) {
            // if char not in object, set count to 1, otherwise increment it by 1
            charCount[char] = (charCount[char] || 0) + 1
        }

        // Decrease count for char in second string
        for (let char of t) {
            // if char in t wasn't present in s or lower than 0
            //return false cause not anagram
            if (!charCount[char]) {
                return false
            } else {
                charCount[char] -= 1
            }
        }

        // if all chars match, they are anagrams, return true
        return true
    }
}
