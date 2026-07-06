class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numbers = new Set(nums);
        let sequenceLength = 0;

        for (const num of numbers) {
            if (!numbers.has(num - 1)) {
                let currentNum = num;
                let currentLength = 1;
                while (numbers.has(currentNum + 1)) {
                    currentLength++;
                    currentNum++;
                }

                if (currentLength > sequenceLength) {
                    sequenceLength = currentLength;
                }
            }
        }
        return sequenceLength;
    }
}
