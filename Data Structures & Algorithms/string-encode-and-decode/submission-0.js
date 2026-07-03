class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for (const str of strs) {
            result += str.length + "#" + str;
        }
        return result; // "8#abcabcab"
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let index = 0;
        const strArr = [];
        while (index < str.length) {
            const hashIndex = str.indexOf("#", index);
            const length = Number(str.slice(index, hashIndex));
            const start = hashIndex + 1;

            const strDecoded = str.slice(start, start + length);
            strArr.push(strDecoded);
            index = start + length;
        }
        return strArr;
    }
}
