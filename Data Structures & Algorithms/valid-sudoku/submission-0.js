class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let flag = true;
        
        // check rows for dupe
        let map = [[], [], [], [], [], [], [], [], []];
        for (let x = 0; x < 9; x++) {
            for (let y = 0; y < 9; y++) {
                if (board[x][y] !== ".") {
                    if (map[x].includes(board[x][y])) {
                        flag = false;
                        break;
                    } else {
                        map[x].push(board[x][y])
                    }
                }
            }
            if (flag === false) break;
        }


        // for (let x = 0; x < 9; x++) {
        //     let currCheck = board[x].sort().filter((n) => n !== ".");
        //     for (let y = 0; y < currCheck.length; y++) {
        //         if (currCheck[y] === currCheck[y + 1]) {
        //             flag = false;
        //             break;
        //         }
        //     }
        //     if (flag === false) break;
        // }

        // check column for dupe
        map = [[], [], [], [], [], [], [], [], []];
        for (let x = 0; x < 9; x++) {
            for (let y = 0; y < 9; y++) {
                if (board[y][x] !== ".") {
                    if (map[x].includes(board[y][x])) {
                        flag = false;
                        break;
                    } else {
                        map[x].push(board[y][x])
                    }
                }
            }
            if (flag === false) break;
        }


        // if (flag !== false) {
        //     for (let x = 0; x < 9; x++) {
        //         let colArr = [];
        //         for (let y = 0; y < 9; y++) {
        //             colArr.push(board[x][y])
        //         }
        //         let currCheck = board[x].sort().filter((n) => n !== ".");            
        //         for (let i = 0; i < currCheck.length; i++) {
        //             if (currCheck[i] === currCheck[i + 1]) {
        //                 flag = false;
        //                 break;
        //             }
        //         }
        //         if (flag === false) break;
        //     }    
        // }

        // check grid
        if (flag !== false) {
            let map = [[], [], [], [], [], [], [], [], []];
             for (let x = 0; x < 9; x++) {
                for (let y = 0; y < 9; y++) {
                    if (x <= 2 && y <= 2) {
                        if (board[x][y] !== ".") {
                            if (map[0].includes(board[x][y])) {
                                flag = false;
                                break;
                            } else {
                                map[0].push(board[x][y])
                            }
                        }
                    } else if (x <= 2 && y <= 5) {
                        if (board[x][y] !== ".") {
                            if (map[1].includes(board[x][y])) {
                                flag = false;
                                break;
                            } else {
                                map[1].push(board[x][y])
                            }
                        }
                    } else if (x <= 2 && y <= 8) {
                        if (board[x][y] !== ".") {
                            if (map[2].includes(board[x][y])) {
                                flag = false;
                                break;
                            } else {
                                map[2].push(board[x][y])
                            }
                        }
                    } else if (x <= 5 && y <= 2) {
                        if (board[x][y] !== ".") {
                            if (map[3].includes(board[x][y])) {
                                flag = false;
                                break;
                            } else {
                                map[3].push(board[x][y])
                            }
                        }
                    } else if (x <= 5 && y <= 5) {
                        if (board[x][y] !== ".") {
                            if (map[4].includes(board[x][y])) {
                                flag = false;
                                break;
                            } else {
                                map[4].push(board[x][y])
                            }
                        }
                    } else if (x <= 5 && y <= 8) {
                        if (board[x][y] !== ".") {
                            if (map[5].includes(board[x][y])) {
                                flag = false;
                                break;
                            } else {
                                map[5].push(board[x][y])
                            }
                        }
                    } else if (x <= 8 && y <= 2) {
                        if (board[x][y] !== ".") {
                            if (map[6].includes(board[x][y])) {
                                flag = false;
                                break;
                            } else {
                                map[6].push(board[x][y])
                            }
                        }
                    } else if (x <= 8 && y <= 5) {
                        if (board[x][y] !== ".") {
                            if (map[7].includes(board[x][y])) {
                                flag = false;
                                break;
                            } else {
                                map[7].push(board[x][y])
                            }
                        }
                    } else if (x <= 8 && y <= 8) {
                        if (board[x][y] !== ".") {
                            if (map[8].includes(board[x][y])) {
                                flag = false;
                                break;
                            } else {
                                map[8].push(board[x][y])
                            }
                        }
                    } 
                }
                if (flag === false) break;
            }
        }

        return flag;
    }
}
