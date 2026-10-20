class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        //Create a freq map
        const freqMap = new Map()

        //For each number, set the key to 0 if num doesn't exist and add 1
        // or incremenet it by 1 again if we found it again
        for (const num of nums) {
            freqMap.set(num, (freqMap.get(num) | 0) + 1)
        }

        //Creates an array from map like [[1,2], [2,3]] etc
        const freqArray = Array.from(freqMap)

        // [[1,2], [2,3]] => [3,2]
        //Sort the array in descending order by values, not keys 
        freqArray.sort((a,b) => b[1] - a[1])

        //Create an array to push the top k elements
        const topK = []

        //Only loop till K in our sorted array 
        for (let i = 0; i < k; i++) {
            
            //Add the value (first element) of the subarray
            topK.push(freqArray[i][0])
        }

        return topK
    }
}
