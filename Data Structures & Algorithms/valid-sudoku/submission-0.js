class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = new Array(9).fill(null).map(() => new Set())
        let cols = new Array(9).fill(null).map(() => new Set())
        let squares = new Array(9).fill(null).map(() => new Set())

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                let num = board[r][c]

                if (num === ".") {
                    continue
                }

                let squareIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3)

                if (rows[r].has(num) || cols[c].has(num) || squares[squareIndex].has(num)) {
                    return false;
                }

                rows[r].add(num);
                cols[c].add(num);
                squares[squareIndex].add(num)

            }
        }

        return true;

    }
}
