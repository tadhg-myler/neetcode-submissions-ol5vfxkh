class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let flag = false;

        nums.sort().forEach((num, idx) => {
            (num === nums[idx + 1]) ? flag = true : null;
        })

        return flag;
    };
}
