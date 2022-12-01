/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // const set = new Set(nums);
    // return set.size !== nums.length;
    
    nums.sort((a, b) => {return a - b});
    for(let i = 1; i < nums.length; i++) {
        if(nums[i - 1] === nums[i]) {
            return true;
        }
    }
    return false;
};