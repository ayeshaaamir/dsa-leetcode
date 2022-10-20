/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let pivot = findPivot(nums);
    
    //if pivot not found
    if(pivot == -1) {
        //normal binary search
        nums.sort((a, b) => {return a - b});
        return binarySearch(nums, target, 0, nums.length - 1);
    }
    
    //if pivot found, we have to find 2 asc sorted arrays
    if(nums[pivot] == target) {
        console.log(nums[pivot])
        return true;
    }
    
    if(nums[pivot] != target) {
        if(target >= nums[0]) {
            return binarySearch(nums, target, 0, pivot - 1);
        }
    
        return binarySearch(nums, target, pivot + 1, nums.length - 1);
    }
};

let findPivot = (nums) => {
    let start = 0;
    let end = nums.length - 1;
    
    while(start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        
        //use 4 cases
        if(mid < end && nums[mid] > nums[mid + 1]) {
            return mid;
        }
        if(mid > start && nums[mid] < nums[mid - 1]) {
            return mid - 1;
        }
        if(nums[mid] < nums[start]) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return -1;
};

let binarySearch = (nums, target, start, end) => {
    while(start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        
        if(target < nums[mid]) {
            end = mid - 1;
        }
        else if(target > nums[mid]) {
            start = mid + 1;
        }
        else if(target == nums[mid]) {
            return true;
        }
    }
    return false;
};