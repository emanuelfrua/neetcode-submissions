class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            const rightNum = nums[right];
            const midNum = nums[mid];
            if (midNum > rightNum) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return nums[left];
    }
}
