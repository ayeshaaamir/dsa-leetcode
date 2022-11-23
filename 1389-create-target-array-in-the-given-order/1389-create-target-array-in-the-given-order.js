/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    // brute force
    // let target = new Array(index.length);
    // for(let i = 0; i < index.length; i++) {
    //     for(let j = target.length - 1; j > index[i]; j--) {
    //         target[j] = target[j - 1];
    //     }
    //     target[index[i]] = nums[i];
    // }
    // return target;
    
    //optimized
    let target = new Array(index.length);
    for(let i = 0; i < index.length; i++) {
        for(let j = i; j > index[i]; j--) {
            target[j] = target[j - 1];
        }
        target[index[i]] = nums[i];
    }
    return target;
};