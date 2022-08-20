/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = new Array(nums.length * 2);
    let n = nums.length;
    for(let i = 0; i < nums.length; i++) {
        ans[i] = nums [i];
        ans[i + n] = nums[i];
    }
    return ans;
};