class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        Map<Character, Character> cto = new HashMap<>();
        cto.put(')', '(');
        cto.put(']', '[');
        cto.put('}', '{');

        for (char c: s.toCharArray()) {
            if (cto.containsKey(c)) {
                if (!stack.isEmpty() && stack.peek() == cto.get(c)) {
                    stack.pop();
                } else {
                    return false;
                }
             } else {
                stack.push(c);
             }
        }
        return stack.isEmpty();

    }
}
