/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
    let longestStreak = 0;
    let currentStreak = 0;
    
    for(let i = 1; i < arr.length; i++) {
        const isPeak = arr[i] > arr[i - 1] && arr[i] > arr[i + 1];
        if(isPeak) {
            currentStreak = getStreak(arr, i);
            if(currentStreak > longestStreak) {
                longestStreak = currentStreak;
            }
        }
    }
    return longestStreak;
};

var getStreak = function(arr, i) {
    let leftIdx = i;
    let rightIdx = i;
    
    while(arr[rightIdx + 1] < arr[rightIdx]) {
        rightIdx++;
    }
    
    while(arr[leftIdx - 1] < arr[leftIdx]) {
        leftIdx--;
    }
    return rightIdx - leftIdx + 1;
};