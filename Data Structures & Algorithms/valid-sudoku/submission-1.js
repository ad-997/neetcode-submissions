class Solution {
    /**
     * This function checks if a given Sudoku board is valid.
     * @param {character[][]} board - 2D array representing the Sudoku board
     * @return {boolean} - true if the Sudoku board is valid, false otherwise
     */
    isValidSudoku(board) {
        // Initialize arrays to store sets for each row, column, and 3x3 square
        let rows = new Array(9).fill(null).map(() => new Set());
        let cols = new Array(9).fill(null).map(() => new Set());
        let squares = new Array(9).fill(null).map(() => new Set());

        // Iterate through each cell in the board
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                let num = board[r][c]; // Get the current number

                if (num === ".") { // Skip empty cells
                    continue;
                }

                // Calculate the index for the 3x3 square
                let squareIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                // Check if the number already exists in the current row, column, or square
                if (rows[r].has(num) || cols[c].has(num) || squares[squareIndex].has(num)) {
                    return false; // If it does, the board is not valid
                }

                // Add the number to the corresponding sets
                rows[r].add(num);
                cols[c].add(num);
                squares[squareIndex].add(num);
            }
        }

        return true; // If no duplicates are found, the board is valid
    }
}
