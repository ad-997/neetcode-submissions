class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let duplicate = new Map()

        for (const n of nums) {
            if (duplicate.has(n)) {
                return true
            } else {
                duplicate.set(n)
            }
        }
        return false
    }
}
