class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const leftNum = nums[left];
            const midNum = nums[mid];
            const rightNum = nums[right];

            if (midNum === target) {
                return mid;
            }

            if (leftNum <= midNum) {
                if (target >= leftNum && target < midNum) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else {
                if (target <= rightNum && target > midNum) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }


        }
        return -1;
    }
}
