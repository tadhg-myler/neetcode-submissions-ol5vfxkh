class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let maps = [],
            rtrnArr = [];

        strs.forEach( (str) => {
            let currMap = {};
            str.split("").sort().forEach((ltr) => {
                if (currMap[ltr] === undefined) {
                    currMap[ltr] = 1
                } else {
                    currMap[ltr]++
                }
            })

            let currMapStr = JSON.stringify(currMap);

            if (maps.includes(currMapStr)) {
                rtrnArr[maps.indexOf(currMapStr)].push(str)
            } else {
                maps.push(currMapStr)
                rtrnArr.push([str])
            }
        })

        return rtrnArr;
    }
}
