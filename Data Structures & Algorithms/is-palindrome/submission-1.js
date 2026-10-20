class Solution {
    /**
     * This function checks if a given string is a palindrome, ignoring non-alphanumeric characters and case sensitivity.
     * @param {string} s - The input string
     * @return {boolean} - true if the string is a palindrome, false otherwise
     */
    isPalindrome(s) {
        let left = 0, right = s.length - 1; // Initialize pointers to the start and end of the string

        while (left < right) { // Loop until the two pointers meet
            // Move the left pointer to the right, skipping non-alphanumeric characters
            while (left < right && !/[a-z0-9]/i.test(s[left])) {
                left++;
            }
            // Move the right pointer to the left, skipping non-alphanumeric characters
            while (left < right && !/[a-z0-9]/i.test(s[right])) {
                right--;
            }

            // Compare the characters at the current pointers, ignoring case
            if (s[left].toLocaleLowerCase() !== s[right].toLocaleLowerCase()) {
                return false; // If they don't match, the string is not a palindrome
            }
            left++; // Move the left pointer to the right
            right--; // Move the right pointer to the left
        }
        return true; // If all characters match, the string is a palindrome
    }
}
