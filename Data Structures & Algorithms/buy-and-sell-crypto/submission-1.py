class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        minPrice = prices[0]
        profit = float('-inf')
        for price in prices:
            minPrice = min(price, minPrice)
            profit = max(profit, price - minPrice)
        return profit
        