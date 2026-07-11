class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let maxWater = 0;

        while (left < right) {
            const width = right - left;
            const leftBar = heights[left];
            const rightBar = heights[right];
            const currentHeight = Math.min(leftBar, rightBar);
            const area = width * currentHeight;

            if (area > maxWater) {
                maxWater = area;
            }

            if (leftBar < rightBar) {
                left++;
            } else {
                right--;
            }
        }

        return maxWater;
    }
}
