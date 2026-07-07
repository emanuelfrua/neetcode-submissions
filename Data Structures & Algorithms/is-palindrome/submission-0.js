class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let leftPointer = 0;
        let rightPointer = s.length - 1;

        while (leftPointer < rightPointer) {
            while (leftPointer < rightPointer
            && !/[a-z0-9]/i.test(s[leftPointer])) {
                leftPointer++;
            }

            while (leftPointer < rightPointer && !/[a-z0-9]/i.test(s[rightPointer])) {
                rightPointer--;
            }

            if (s[leftPointer].toLowerCase() === s[rightPointer].toLowerCase()) {
                leftPointer++;
                rightPointer--;
            } else {
                return false;
            }
        }

        return true;
    }
}
