/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    //dutch national flag algo
    let low = 0;
    let high = nums.length - 1;
    let mid = 0;
    let temp;
    
    while(mid <= high) {
        switch(nums[mid]) {
            case 0: {
                temp = nums[low];
                nums[low] = nums[mid];
                nums[mid] = temp;
                low++;
                mid++;
                break;
            }
            case 1: {
                mid++;
                break;
            }
            case 2: {
                temp = nums[mid];
                nums[mid] = nums[high];
                nums[high] = temp;
                high--
                break;
            }
                
        }
    }
    return nums;
};