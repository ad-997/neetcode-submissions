class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:

        ans = defaultdict(list)
        for s in strs:
            text = sorted(s)
            sr = "".join(text)
            ans[sr].append(s)
        
        return list(ans.values())



        