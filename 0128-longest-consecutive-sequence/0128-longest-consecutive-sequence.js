/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set();
    let maxStreak = 0;
    
    for(let element of nums) {
        set.add(element);
    }
    
    for(let element of nums) {
        if(!set.has(element - 1)) {
            let count = 0;
            while(set.has(element)) {
                element++;
                count++;
            }
            maxStreak = Math.max(maxStreak, count);
        }
    }
    return maxStreak;
};