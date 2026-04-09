class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let prof = 0, l = 0, r = 1;

        // for (let i = prices.length - 1 ; i >= 0 ; i--) {
        //     for (let j = i - 1 ; j >= 0 ; j--) {
        //         if (prices[i] - prices[j] > 0 && prices[i] - prices[j] > prof) prof = prices[i] - prices[j]
        //     }
        // }

        while (r < prices.length) {
            if (prices[l] < prices[r] ) {
                prof = Math.max(prof, (prices[r] - prices[l]))
            } else if (prices[l] > prices[r] ) {
                l = r;
            }
            r++;
        }

        return prof;
    }
}
