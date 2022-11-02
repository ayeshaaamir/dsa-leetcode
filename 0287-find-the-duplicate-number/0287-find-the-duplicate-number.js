/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let i = 0;
    while(i < nums.length) {
        if(nums[i] != i + 1) {
            let correct = nums[i] - 1;
            if(nums[i] != nums[correct]) {
                swap(nums, i, correct);
            }
            else {
                return nums[i];
            }
        }
        else {
            i++;
        }
    }
    return -1;
};

let swap = (nums, first, second) => {
    let temp = nums[first];
    nums[first] = nums[second];
    nums[second] = temp;
}