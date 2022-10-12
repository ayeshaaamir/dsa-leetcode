/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let start = 0;
    let end = arr.length - 1;
    
    while(start < end) {
        let mid = parseInt(start + (end - start) / 2);
        if(arr[mid] > arr[mid + 1]) {
            //arr is dec
            end = mid;
        }
        else {
            //arr is asc
            start = mid + 1;
        }
    }
    return start;
};