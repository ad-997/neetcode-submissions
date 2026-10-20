class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = {}
        for val in nums:
            freq[val] = 1 + freq.get(val, 0)
        sorted_nums = sorted(freq, key=freq.get, reverse=True)        
        return sorted_nums[:k]
            

            
