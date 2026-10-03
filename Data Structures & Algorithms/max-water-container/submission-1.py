class Solution:
    def maxArea(self, heights: List[int]) -> int:
        left = 0
        right = len(heights) - 1
        maxArea = float('-inf')

        while left < right:
            breadth = right - left
            height = min(heights[left], heights[right])
            maxArea = max(breadth*height, maxArea)
            if heights[left] < heights[right]:
                left += 1
            else:
                right -= 1
        return maxArea

        