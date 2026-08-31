from collections import OrderedDict
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        map = OrderedDict();
        for n in nums:
            map[n] = map.get(n, 0) + 1
        ans = sorted(map.items(), key = lambda x: x[1], reverse=True)
        return [item[0] for item in ans[:k]]