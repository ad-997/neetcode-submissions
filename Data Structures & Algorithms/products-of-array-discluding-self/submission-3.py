class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:

        prefix = [None] * len(nums)
        suffix = [None] * len(nums)
        prefix[0] = 1
        suffix[len(nums) - 1] = 1

        output = [None] * len(nums)

        for i in range(1, len(nums)):
            prefix[i] = prefix[i-1] * nums[i-1]

        for i in range(len(nums) - 2, -1, -1):
            suffix[i] = suffix[i+1] * nums[i+1]

        for i in range(len(nums)):
            output[i] = prefix[i] * suffix[i]

        return output