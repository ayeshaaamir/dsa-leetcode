/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let result = []
    let i = num.length
    
    while(i-- > 0 || k) {
        if(i >= 0) {
            k = k + num[i]
        }
        result.unshift(k % 10)
        k = Math.floor(k / 10)
    }
    return result
};