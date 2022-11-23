/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const sentenceToArray = sentence.split('')
    const newSet = new Set(sentenceToArray);

    if (newSet.size < 26) return false;
    
    return true;
};