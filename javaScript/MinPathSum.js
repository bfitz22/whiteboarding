var minPathSum = function(grid, row = 0, col = 0) {
    const numRows = grid.length - 1;
    const numCols = grid[0].length - 1;
 
    if (row === numRows && col === numCols) {
        return grid[numRows][numCols];
    }
 
    if (row > numRows || col > numCols) return Infinity;
 
    let currNum = grid[row][col];
    let bottom = minPathSum(grid, row + 1, col);
    let right = minPathSum(grid, row, col + 1);
 
    if (bottom > right) { return currNum + right };
    if (right >= bottom) { return currNum + bottom };
 
 };

