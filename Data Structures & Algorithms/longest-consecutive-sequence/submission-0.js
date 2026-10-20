class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) {
            return 0
        }

        let numSet = new Set(nums)
        let maxLength = 0;

        for (let num of numSet) {
            if (!numSet.has(num - 1)) {
                let currentNum = num
                let currentStreak = 1;

                while(numSet.has(currentNum + 1)) {
                    currentNum += 1
                    currentStreak += 1
                }

                maxLength = Math.max(currentStreak, maxLength)
            }
        }
        return maxLength


    }
}
