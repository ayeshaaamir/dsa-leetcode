/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let countZero = 0;
    let max = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == 0) {
            countZero = 0;
        }
        else {
            countZero++;
        }
        max = Math.max(max, countZero);
    }
    return max;
};