class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        # Convert the list to a set for O(1) average time lookups 
        # and to automatically remove duplicates.
        num_set = set(nums)
        
        # Track the maximum length of any consecutive sequence found.
        longest = 0
        
        # Iterate over each number in the original list.
        for num in nums:
            # Check if 'num' is the start of a consecutive sequence.
            # If 'num - 1' is present, then 'num' is NOT the start,
            # so we skip it to avoid redundant counting.
            if (num - 1) not in num_set:
                curr_num = num
                curr_streak = 1

                # Count all consecutive numbers following 'curr_num' (curr_num + 1, curr_num + 2, etc.)
                while (curr_num + 1) in num_set:
                    curr_num += 1
                    curr_streak += 1
                
                # Update the longest sequence length found so far.
                longest = max(longest, curr_streak)
                
        # Return the overall maximum streak length.
        return longest