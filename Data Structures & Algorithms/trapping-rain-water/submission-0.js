class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        // If height is empty or has no elements, return 0
        if (!height || height.length === 0) {
            return 0;
        }

        // Initialize result to store the total trapped water
        let result = 0;
        // Initialize two pointers, left and right, to point to the beginning and end of the array
        let left = 0;
        let right = height.length - 1;
        // Initialize leftMax and rightMax to store the maximum height on the left and right side
        let leftMax = height[left];
        let rightMax = height[right];

        // Loop until the left pointer is less than the right pointer
        while (left < right) {
            // If leftMax is less than rightMax, move the left pointer to the right
            if (leftMax < rightMax) {
                left++;
                // Update leftMax to the maximum height so far from the left side
                leftMax = Math.max(leftMax, height[left]);
                // Calculate trapped water at the current position and add it to the result
                result += leftMax - height[left];
            } else {
                // If rightMax is less than or equal to leftMax, move the right pointer to the left
                right--;
                // Update rightMax to the maximum height so far from the right side
                rightMax = Math.max(rightMax, height[right]);
                // Calculate trapped water at the current position and add it to the result
                result += rightMax - height[right];
            }
        }
        // Return the total trapped water
        return result;
    }
}
