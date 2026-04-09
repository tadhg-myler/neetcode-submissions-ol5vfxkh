class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0, r = heights.length-1, rtn = 0, cnt = 0;

        while (l < r) {
            let d = r - l,
                x = 0;

                console.log("l:" + l)
                console.log("r:" + r)
            if (heights[l] > heights[r]) {
                x = heights[r];
                r--;
            } else if (heights[l] < heights[r]) {
                x = heights[l];
                l++;
            } else if (heights[l] == heights[r]) {
                x = heights[l];
                l++;
            }

            if ((x * d) > rtn) {
                console.log("x:" + x)
                console.log("d:" + d)
                console.log("x*d:" + x*d)
                console.log("rtn:" + rtn)
                rtn = (x * d);
            }
        }

        return rtn;
    }
}
