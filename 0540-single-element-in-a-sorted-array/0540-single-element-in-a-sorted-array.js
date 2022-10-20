/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    
    while(start < end) {
        let mid = parseInt(start + (end - start) / 2);
        
        if((mid % 2 == 0 && nums[mid] == nums[mid + 1]) || (mid % 2 == 1 && nums[mid] == nums[mid - 1])) {
            start = mid + 1;
        }
        else {
            end = mid;
        }
    }
    return nums[start];
};