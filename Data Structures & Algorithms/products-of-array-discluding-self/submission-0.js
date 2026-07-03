class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const leftProd = [];
        const rightProd = [];
        const result = [];
        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                leftProd[i] = 1;
            } else {
                   leftProd[i] = leftProd[i - 1] * nums[i - 1];
            }
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            if (i === (nums.length - 1)) {
                rightProd[i] = 1;
            } else {
                rightProd[i] = rightProd[i + 1] * nums[i + 1];
            }
        }

        for (let i = 0; i < nums.length; i++) {
            result[i] = leftProd[i] * rightProd[i];
        }
        return result;
    }
}
