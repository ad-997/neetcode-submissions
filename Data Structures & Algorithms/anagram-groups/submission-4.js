class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // reduced version, group tops and stop as they are anagram
        // one way would be to sort the anagram [opst, opst]
        let map = new Map()
        for (let i = 0; i < strs.length; i++) {
            // to use sort, split the string into char array, sort
            // then join
            let sorted = strs[i].split('').sort().join('')
            // if we don't have key as the sorted string, we make one
            if (!map.has(sorted)) {
                map.set(sorted, [strs[i]])
            } else {
            // if we do, we just get value (array) of sorted and push
            // the new string 
            map.get(sorted).push(strs[i])
            }
        }
        //we return values of map and convert it to Array
        return Array.from(map.values())
    }
}
