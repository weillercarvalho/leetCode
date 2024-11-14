/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const clean = s.trim();
    const arr = clean.split(" ");
    return arr[arr.length - 1].length
};