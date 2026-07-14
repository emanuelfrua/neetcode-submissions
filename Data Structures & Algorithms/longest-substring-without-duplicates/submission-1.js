class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const seen = new Set();
        let left = 0;
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {
            const char = s[right];
            while (seen.has(char)) {
                seen.delete(s[left]);
                left++;
            }

            seen.add(char);

            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
