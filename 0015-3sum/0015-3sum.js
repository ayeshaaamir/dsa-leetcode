/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  let triplets = {};
  let currentSum;
  let targetSum = 0;

  for(let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while(left < right) {
      currentSum = nums[i] + nums[left] + nums[right];
        
      if(currentSum == targetSum) {
        triplets[[nums[i], nums[left], nums[right]]] = [nums[i], nums[left], nums[right]];
        left += 1;
        right -= 1;
      }
        
      else if(currentSum < targetSum) {
        left += 1;
      }
        
      else if(currentSum > targetSum) {
        right -= 1;
      }
    }
  }
  return Object.values(triplets);
};