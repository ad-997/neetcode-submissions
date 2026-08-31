class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False;
        
        # map
        char_count = {}

        # add freq in map
        for char in s:
            char_count[char] = char_count.get(char, 0) + 1;
        
        # if char not in map ret false, else decr by 1, if less than 0
        # also return false
        for char in t:
            if char not in char_count:
                return False
            char_count[char] = char_count.get(char, 0) - 1;

            if char_count[char] < 0:
                return False
        return True
           

        