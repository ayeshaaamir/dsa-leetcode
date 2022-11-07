/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let output = [];
    
    for(let i = 0; i < numRows; i++) {
        output.push(Array(i + 1));
        for(let j = 0; j <= i; j++) {
            if(j == 0 || j == i) {
                output[i][j] = 1;
            }
            else {
                output[i][j] = output[i - 1][j - 1] + output[i - 1][j];
            }
        }
    }
    return output;
};