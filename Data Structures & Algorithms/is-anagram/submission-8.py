class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        freq = {}
        for char in s:
            freq[char] = freq.get(char, 0) + 1
        
        for char in t:
            if char not in freq:
                return False
            
            if freq[char] == 1:
                del freq[char]
            else:
                freq[char] -= 1
        
        return True



    
        