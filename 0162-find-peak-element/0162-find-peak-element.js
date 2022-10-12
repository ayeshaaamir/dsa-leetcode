/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    
    while(start < end) {
        let mid = parseInt(start + (end - start) / 2);
        if(nums[mid] > nums[mid + 1]) {
            //nums is dec
            end = mid;
        }
        else {
            //nums is asc
            start = mid + 1;
        }
    }
    return start;
};