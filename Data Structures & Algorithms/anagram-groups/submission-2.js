class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        //Create a result object
        let result = {}
        
        //Loop
        for (const str of strs) {
            //Take each word/str from the array and sort it
        	let sortedStr = str.split("").sort().join('')

            // Check if the `result` object already has an entry for the current `sortedStr` key.
            // If not, create an empty array for this key
            if(!result[sortedStr]) {
          		result[sortedStr] = []
          }

          // `str` with same sorted keys will be pushed as values for the `result` object
          result[sortedStr].push(str)
        }

        // This returns an array of all values of `result` object
        return Object.values(result)
 
    }
}
