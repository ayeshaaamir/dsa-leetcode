/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let result = []
    let k = 1
    let i = digits.length
    
    while(i-- > 0 || k) {
        if(i >= 0) {
            k = k + digits[i]
        }
        result.unshift(k % 10)
        k = Math.floor(k / 10)
    }
    return result
};