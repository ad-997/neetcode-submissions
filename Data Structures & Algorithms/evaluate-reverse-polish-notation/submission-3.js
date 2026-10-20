class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        for (const c of tokens) {
            if (!"+-*/".includes(c)) {
                stack.push(parseInt(c))
            }
            if (c === "+") {
                stack.push(stack.pop() + stack.pop())
            } else if (c === "-") {
                let a = stack.pop()
                let b = stack.pop()
                stack.push(b - a)
            } else if (c === "*") {
                stack.push(stack.pop() * stack.pop())
            } else if (c === "/") { 
                let a = stack.pop()
                let b = stack.pop()
                stack.push(Math.trunc( b/a))
            }
        }
        return stack.pop()
    }
}
