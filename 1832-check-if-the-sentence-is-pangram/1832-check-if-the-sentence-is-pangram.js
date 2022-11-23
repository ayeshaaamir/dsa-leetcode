/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    // brute force
    // let array = new Array(26).fill(false);
    // for(let i = 0; i < sentence.length; i++) {
    //     array[sentence.charAt(i)-97] = true;
    // }
    // for(let i = 0; i < 26; i++) {
    //     if(array[i] == false) {
    //         return false;
    //     }
    // }
    // return true;
    
    //  optimize using set
     const sentenceToArray = sentence.split('')
     const newSet = new Set(sentenceToArray);

     if (newSet.size < 26) return false;

     return true;
};