class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const need = {};
        let haveCount = 0;

        for (const char of t) {
            need[char] = (need[char] || 0) + 1;
        }

        let needCount = Object.keys(need).length;

        const window = {};
        let left = 0;
        
        let result = [-1, -1];
        let resultLength = Infinity;

        for (let right = 0; right < s.length; right++) {
            const char = s[right];

            window[char] = (window[char] || 0) + 1;

            if (need[char] && window[char] === need[char]) {
                haveCount++;
            }
            while (haveCount === needCount) {
                const windowLength = right - left + 1;

                if (windowLength < resultLength) {
                    result = [left, right];
                    resultLength = windowLength;
                }

                const leftChar = s[left];
                window[leftChar]--;

                if (need[leftChar] && window[leftChar] < need[leftChar]) {
                    haveCount--;
                }

                left++;
            }
        }

        if (resultLength === Infinity) {
            return "";
        }

        return s.slice(result[0], result[1] + 1);
    }
}
