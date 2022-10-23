/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let n = matrix.length;
    let m = matrix[0].length;
    let row = 0;
    let col = m - 1;

    
    if(n == 0) {
        return false;
    }

    while(row < n && col >= 0) {
        if(matrix[row][col] == target) {
            return true;
        }
        else if(matrix[row][col] > target) {
            col--;
        }
        else if(matrix[row][col] < target) {
            row++;
        }
    }
    return false;
};