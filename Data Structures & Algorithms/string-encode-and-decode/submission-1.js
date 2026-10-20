class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let x = JSON.stringify(strs)
        let encoded = btoa(encodeURIComponent(x))
        return encoded



    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decoded = decodeURIComponent(atob(str))
        let obj1 = JSON.parse(decoded)
        return obj1

    }
}
