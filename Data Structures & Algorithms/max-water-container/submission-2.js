class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let area = -1
        let maxArea = -1

        let left = 0
        let right = heights.length - 1

        while (left < right) {
            let width = right - left
            let height = Math.min(heights[left], heights[right])
            area = width * height
            maxArea = Math.max(area, maxArea)

            if (heights[left] < heights[right]) {
                left++
            } else {
                right--
            }
        }
        return maxArea
    }
}
