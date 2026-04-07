class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let numBucket = new Map(),
            numCounts = [],
            ans = [];

        nums.forEach((num) => {
            if (!numBucket.has(num)) {
                numBucket.set(num, 1)
            } else {
                let val = numBucket.get(num),
                    newVal = val + 1;
                numBucket.set(num, newVal)
            }
        });

        numBucket.forEach((val, key) => {
            numCounts.push({'key': key, 'val': val})
        });

        numCounts.sort((a, b) => b.val - a.val)
        
        numCounts.slice(0, k).forEach((v) =>  {ans.push(v.key)})

        return ans;
    }
}
