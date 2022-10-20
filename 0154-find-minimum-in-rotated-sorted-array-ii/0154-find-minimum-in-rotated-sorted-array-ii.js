/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let pivot = findPivot(nums);
    
    if(pivot != -1) {
        return nums[pivot + 1];
    }
    
    else {
        nums.sort((a, b) => {return a - b});
        return nums[0];
    }
};

let findPivot = (nums) => {
    let start = 0;
    let end = nums.length - 1;
    
    while(start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        
        if(mid < end && nums[mid] > nums[mid + 1]) {
            return mid;
        }
        
        else if(mid > end && nums[mid] < nums [mid - 1]) {
            return mid - 1;
        }
        
        else if(nums[mid] < nums[start]) {
            end = mid - 1;
        }
        
        else {
            start = mid + 1;
        }
    }
    return -1;
};