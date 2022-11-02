/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let i = 0;
    let arr = [];
    while(i < nums.length) {
        let correct = nums[i] - 1;
        if(nums[i] != nums[correct]) {
            swap(nums, i, correct);
        }
        else {
            i++;
        }
    }
    // search for missing
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != i + 1) {
            arr.push(i + 1);
        }
    }
    return arr;
};

let swap = (nums, first, second) => {
    let temp = nums[first];
    nums[first] = nums[second];
    nums[second] = temp;
}