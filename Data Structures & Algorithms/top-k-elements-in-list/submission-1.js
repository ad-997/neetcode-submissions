class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {


        //Creating freqMap with built in Map() class
        const freqMap = new Map()

        // Iterating over each num on the arrays
        for (const num of nums) {
            //Basically (Encountered Number: Count of the number)
            // If the number isn't in the freqMap, this part runs 0 ) + 1
            // if the number is in freqMap, just increment it by one
            freqMap.set(num, (freqMap.get(num) || 0) + 1)
        }

        //Creates Array from freqMap -> [[key, value], [key, value], ...] etc
        let freqArray = Array.from(freqMap)

        //Sorting the array by their values
        freqArray.sort((a, b) => b[1] - a[1])


        //Creating topK which'll store the number whos count came the most
        const topK = []

        // k is the number of times for loop will run, 
        for (let i = 0; i < k; i++) {

            // Add the val of first element of the subarray
            topK.push(freqArray[i][0])
        }
        return topK
    } 
}
