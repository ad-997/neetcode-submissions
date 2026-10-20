class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        //Array is sorted in ascending order
        let left = 0 //Left pointer
        let right = numbers.length - 1 //Right pointer

        while (left < right) 
        {
            //if numbers from left and right sum to target and their idx are not same
            if (numbers[left] + numbers[right] == target && left != right) {
                return [left + 1, right + 1] // return indexs in 1-indexed format
            } else if (numbers[left] + numbers[right] < target) { //if sum < target
                left++ //move the left pointer forward
            } else { //if sum > target
                right-- //move the right pointer backwar
            }
        }

        //if we don't find anything return an empty array
        return []
    }
}
