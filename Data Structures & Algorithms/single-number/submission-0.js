class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
        let result = 0

        // Apply XOR operatio, gives 0 for same inputs (00, 11)
        // else (1 for 01, 10)
        for (let num of nums) {
            result ^= num
        }

        return result
    }
}
