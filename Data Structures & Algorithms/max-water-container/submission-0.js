class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(h) {
        let area = -1
        let maxArea = -1
        let l = 0
        let r = h.length - 1

        while (l < r) {
            let width =  r - l
            let height = Math.min(h[l], h[r])
            area = width * height
            maxArea = Math.max(area, maxArea)

            if (h[l] < h[r]) {
                l++
            } else {
                r--
            }
        }
        return maxArea
    }
}
