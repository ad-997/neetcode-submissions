class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      let result = {}
      
      for (let word of strs) {
        let sortedStr = word.split('').sort().join("")
        if (result[sortedStr]) {
          result[sortedStr].push(word)
        } else {
            result[sortedStr] = [word]
        }
      }
      return Object.values(result)
    }
}
