class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sKeysMap = {},
            tKeysMap = {},
            rtnVal = true;

        if (s.length !== t.length) return false;

        s.split('').map((key) => {
            if (sKeysMap[key] === undefined) {
                sKeysMap[key] = 1;
            } else {
                sKeysMap[key]++
            }
        });

        t.split('').map((key) => {
            if (tKeysMap[key] === undefined) {
                tKeysMap[key] = 1;
            } else {
                tKeysMap[key]++
            }
        });

        let sKeys = Object.keys(sKeysMap);

        sKeys.forEach((key) => {
            if (sKeysMap[key] !== tKeysMap[key]) {
                rtnVal = false;
            }
        })

        return rtnVal;
    }
}
