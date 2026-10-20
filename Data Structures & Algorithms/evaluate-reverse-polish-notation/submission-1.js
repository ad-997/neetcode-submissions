class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let operators = ["*", "-", "+", "/"]
        let numbers = []


        for (const num of tokens) {
            if (operators.includes(num)) {
            let a = numbers.pop()
            let b = numbers.pop()

            if (num == "*") {
               numbers.push(b * a)
            } else if (num == "-") {
                numbers.push(b - a)
            } else if (num == "+") {
                numbers.push(b + a)
            } else if (num == "/") {
                numbers.push(Math.trunc(b / a))
            } 
            } else {
                numbers.push(Number(num))
            }
        }
        return numbers.pop()
    }
}
