/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    //brute force
    nums.sort((a, b) => {return a - b}).reverse();
    return nums[k - 1];
    
    //optimized
    
};