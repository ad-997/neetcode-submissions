class Solution {
    /**
     * This function finds the length of the longest consecutive elements sequence in an unsorted array of numbers.
     * @param {number[]} nums - Array of numbers
     * @return {number} - Length of the longest consecutive sequence
     */
    longestConsecutive(nums) {
        // If the array is empty, return 0
        if (nums.length === 0) {
            return 0;
        }

        // Create a set of the numbers for O(1) lookups
        let numSet = new Set(nums);
        let maxLength = 0; // Initialize the maximum length of consecutive sequence

        // Iterate through each number in the set
        for (let num of numSet) {
            // Check if the current number is the start of a sequence
            if (!numSet.has(num - 1)) {
                let currentNum = num; // Current number in the sequence
                let currentStreak = 1; // Length of the current consecutive sequence

                // Continue the sequence while the next number exists in the set
                while (numSet.has(currentNum + 1)) {
                    currentNum += 1; // Move to the next number
                    currentStreak += 1; // Increase the length of the current streak
                }

                // Update the maximum length if the current streak is longer
                maxLength = Math.max(currentStreak, maxLength);
            }
        }

        return maxLength; // Return the length of the longest consecutive sequence
    }
}
