class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let rtnFlg = true;

        let arrToCheck = s.toLowerCase().replaceAll(/[^a-z0-9]/g, "").split(""),
            lngth = arrToCheck.length - 1;

        arrToCheck.forEach((char, idx) => {
            if (char === arrToCheck[lngth]) {
                lngth--;
            } else {
                rtnFlg = false
            }
        })

        return rtnFlg;
    }
}
