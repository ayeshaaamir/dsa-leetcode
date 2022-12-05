/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    //brute force
    // nums.sort((a, b) => {return a - b}).reverse();
    // return nums[k - 1];
    
    //optimized
    let maxPriorityQueue = new MaxPriorityQueue();
    
    nums.forEach((num) => maxPriorityQueue.enqueue(num));
    
    while(k > 1) {
        maxPriorityQueue.dequeue();
        k--;
    }
    return maxPriorityQueue.front().element;
    
};