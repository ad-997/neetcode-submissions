class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        results = defaultdict(list)
        for word in strs:
            sorted_key = ''.join(sorted(word))
            results[sorted_key].append(word)
        return list(results.values())

