class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let r = 0; r < board.length; r++) {
            let seen = new Set();
            for (let c = 0; c < board.length; c++) {
                let val = board[r][c];
                if (val === ".") continue;
                if (seen.has(val)) return false;
                seen.add(val);
            }
        }

        // Column check
        for (let c = 0; c < board.length; c++) {
            let seen = new Set();
            for (let r = 0; r < board.length; r++) {
                let val = board[r][c];
                if (val === ".") continue;
                if (seen.has(val)) return false;
                seen.add(val);
            }
        }

        // Sub-box check
        for (let boxRow = 0; boxRow < 9; boxRow += 3) {
            for (let boxCol = 0; boxCol < 9; boxCol += 3) {
                let seen = new Set();
                for (let r = 0; r < 3; r++) {
                    for (let c = 0; c < 3; c++) {
                        let val = board[boxRow + r][boxCol + c];
                        if (val === ".") continue;
                        if (seen.has(val)) return false;
                        seen.add(val);
                    }
                }
            }
        }

        return true;
    }
}
    
