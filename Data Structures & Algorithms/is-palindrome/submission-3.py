class Solution:
    def isPalindrome(self, s: str) -> bool:
        cleaned_string = ''.join([char for char in s if char.isalnum()]).lower()
        i = 0
        j = len(cleaned_string) - 1
        while i < j:
            if cleaned_string[i] == cleaned_string[j]:
                i += 1
                j -= 1
            elif cleaned_string[i] != cleaned_string[j]:
                return False
        return True