class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const triplets = [];
        nums.sort((a, b) => a - b);

        let leftP;
        let rightP;

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            const numFix = nums[i];
            leftP = i + 1;
            rightP = nums.length - 1;

            while (leftP < rightP) {
                const numB = nums[leftP];
                const numC = nums[rightP];

                const sum = numFix + numB + numC;

                if (sum === 0) {
                    triplets.push([numFix, numB, numC]);
                    leftP++;
                    rightP--;

                    while (leftP < rightP && nums[leftP] === nums[leftP - 1]) {
                        leftP++;
                    }
                    while (leftP < rightP && nums[rightP] === nums[rightP + 1]) {
                        rightP--;
                    }
                } else if (sum < 0) {
                    leftP++;
                } else {
                    rightP--;
                }
            }
        }
        return triplets;
    }
}
