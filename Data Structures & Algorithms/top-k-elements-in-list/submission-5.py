from collections import defaultdict


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = {}
        ans = []
        for i in range(len(nums)):
            freq[nums[i]] = freq.get(nums[i], 0) + 1

        sorted_dict = dict(sorted(freq.items(), key=lambda item: item[1], reverse=True))

        for key, value in sorted_dict.items():
            k -= 1
            ans.append(key)
            if k == 0:
                break

        return ans
