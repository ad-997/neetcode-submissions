class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0, right = s.length - 1;

        while (left < right) {
            while (left < right && !/[a-z0-9]/i.test(s[left])) {
                left++;
            }
            while (left < right && !/[a-z0-9]/i.test(s[right])) {
                right--;
            }

            if (s[left].toLocaleLowerCase() !== s[right].toLocaleLowerCase()) {
                return false
            }
            left++;
            right--;
        }
        return true
    }
}
