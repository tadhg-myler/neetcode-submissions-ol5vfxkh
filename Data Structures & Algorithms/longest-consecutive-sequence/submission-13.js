class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longestSeq = [],
            counter = 1;

        if (nums.length === 0) return 0;
        if (nums.length === 1) return 1;

        nums.sort((a, b) => a - b).forEach((n, idx) => {
            if (n + 1 === nums[idx + 1]) {
                counter++;
            } else if (n !== nums[idx + 1]) {
                longestSeq.push(counter)
                counter = 1;
            }
        })

        return longestSeq.sort((a, b) => a - b).pop()
    }
}
