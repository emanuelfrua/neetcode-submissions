class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const pairs = {
            "(": ")",
            "{": "}",
            "[": "]"
        }
        for (const char of s) {
            if (pairs[char]) {
                stack.push(pairs[char]);
            } else {
                const expected = stack.pop();
                if (expected !== char) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}
