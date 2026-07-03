class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = [];
        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                result[i] = 1;
            } else {
                   result[i] = result[i - 1] * nums[i - 1];
            }
        }

        let rightProd = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] = rightProd * result[i];
            rightProd = rightProd * nums[i];
        }

        return result;
    }
}
