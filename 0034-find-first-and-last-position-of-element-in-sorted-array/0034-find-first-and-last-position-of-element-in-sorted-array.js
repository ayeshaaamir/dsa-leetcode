/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let ans = [-1, -1];
    
    let start = search(nums, target, true);
    let end = search(nums, target, false);
    
    ans[0] = start;
    ans[1] = end;
    
    return ans;
};

let search = (nums, target, findStartIndex) => {
    let ans = -1;
    
    let start = 0;
    let end = nums.length - 1;
    
    while(start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        
        if(target < nums[mid]) end = mid - 1;
        else if(target > nums[mid]) start = mid + 1;
        else {
            ans = mid;
            if(findStartIndex) end = mid - 1;
            else start = mid + 1;
        }
    }
    return ans;
}