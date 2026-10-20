class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let minPrice = prices[0]

        for (let i = 1; i < prices.length; i++) {
            minPrice = Math.min(minPrice, prices[i-1])

            maxProfit = Math.max(prices[i] - minPrice, maxProfit)
        }
        return maxProfit
    }
}
