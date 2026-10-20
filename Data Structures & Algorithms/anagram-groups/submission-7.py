from collections import defaultdict
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        freq = defaultdict(list)
        result = []
        for word in strs:
            sortedWord = "".join(sorted(word))
            if not freq[sortedWord]:
                freq[sortedWord] = [word]
            else:
                freq[sortedWord].append(word)
        for key, values in freq.items():
            result.append(values)
        return result
        