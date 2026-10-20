class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) {
            return 0
        }

        let result = 0

        for (let i = 0; i < nums.length; i++) {
            let currNum = nums[i]
            let count = 1

            while (nums.includes(currNum + 1)) {
                currNum++
                count++
            }

            result = Math.max(result, count)
        }
        return result


    }
}
