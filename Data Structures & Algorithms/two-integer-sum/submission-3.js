class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let idxI = 0, idxJ = 0;
        for (let num of nums) {
            let diff = target - num;

            if (nums.includes(diff)) {
                idxI = nums.indexOf(num);
                if (num == diff) {
                    idxJ = nums.lastIndexOf(diff);
                } else {
                    idxJ = nums.indexOf(diff); 
                }
                if (idxI !== idxJ) break;
            }
        }
        

        return [idxI, idxJ].sort();
    }
}
