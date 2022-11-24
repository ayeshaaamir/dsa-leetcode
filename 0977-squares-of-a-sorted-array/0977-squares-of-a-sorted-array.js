/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let output = [];
    let left = 0;
    let right = nums.length - 1;
    
    for(let i = nums.length - 1; i >= 0; i--) {
        let leftSqr = nums[left] ** 2;
        let rightSqr = nums[right] ** 2;
        
        if(leftSqr > rightSqr) {
            output[i] = leftSqr;
            left++;
        }
        else {
            output[i] = rightSqr;
            right--;
        }
    }
    return output;
};