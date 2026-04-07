class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let rtnArr = [];

        nums.forEach((n, i) => {
            let initVal = 1,
                copyArr = Array.from(nums),
                val = copyArr.reduce((prev, curr, currIdx, arr) => (currIdx !== i) ? prev * curr : prev, initVal);
            rtnArr.push(val)
        })

        return rtnArr;
    }
}
