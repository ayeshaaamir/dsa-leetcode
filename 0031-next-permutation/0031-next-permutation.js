/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length - 2;
    
    if(nums == null || nums.length <= 1) {
        return;
    }
    
    while(i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    if(i >= 0) {
        let j = nums.length - 1;
        while(nums[j] <= nums[i]) {
            j--;
        }
        swap(nums, i, j);
    }
    reverse(nums, i + 1, nums.length - 1);
};

let swap = (nums, i, j) => {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

let reverse = (nums, i, j) => {
    while(i < j) {
        swap(nums, i++, j--);
    }
}
