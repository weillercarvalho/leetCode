/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let plus2Array = [...nums1, ...nums2];
    let ordenedArray = plus2Array.sort((a,b) => a-b);
    let middle = Math.floor(ordenedArray.length / 2);
    if (ordenedArray.length % 2 !== 0) {
        return ordenedArray[middle];
    }else {
        return ((ordenedArray[middle -1] + ordenedArray[middle]) / 2)
    }
};