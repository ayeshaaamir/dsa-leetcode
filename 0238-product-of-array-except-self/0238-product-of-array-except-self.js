/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    //brute force
    // let products = new Array(nums.length);
    // for(let i = 0; i < nums.length; i++) {
    //     let runningProduct = 1;
    //     for(let j = 0; j < nums.length; j++) {
    //         if(i != j) {
    //             runningProduct *= nums[j];
    //         }
    //     }
    //     products[i] = runningProduct;
    // }
    // return products;
    
    //optimized
    let products = new Array(nums.length);
    
    let leftRunningProduct = 1;
    for(let i = 0; i < nums.length; i++) {
        products[i] = leftRunningProduct;
        leftRunningProduct *= nums[i];
    }
    
    let rightRunningProduct = 1;
    for(let i = nums.length - 1; i >= 0; i--) {
        products[i] *= rightRunningProduct;
        rightRunningProduct *= nums[i];
    }
    return products;
};