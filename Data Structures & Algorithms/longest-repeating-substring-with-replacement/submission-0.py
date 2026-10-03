class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        left = 0
        count_char = defaultdict(int)
        max_len = float('-inf')
        max_freq = float('-inf')

        for right in range(len(s)):
            count_char[s[right]] += 1

            max_freq = max(max_freq, count_char[s[right]])

            if (right - left + 1) - max_freq > k:
                count_char[s[left]] -= 1
                left += 1
            
            max_len = max(max_len, right - left + 1)
        return max_len
        