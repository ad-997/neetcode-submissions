class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let map = {
            "}":"{",
            "]":"[",
            ")":"("
        }
        let stack = []

        for (const char of s) {
            if (map[char]) {
                if (!stack.length || stack.pop() != map[char]) {
                    return false
                }
            } else {
                stack.push(char)
            }
        }

        return stack.length == 0

    }
}
