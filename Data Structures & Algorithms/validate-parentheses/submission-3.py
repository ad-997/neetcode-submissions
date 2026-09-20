class Solution:
    def isValid(self, s: str) -> bool:
        bracket = {")":"(", "]":"[", "}":"{"}
        stk = []

        for char in s:
            if char in bracket.values():
                stk.append(char)
            elif char in bracket:
                if not stk or stk.pop() != bracket[char]:
                    return False
                else:
                    continue
        return len(stk) == 0


        