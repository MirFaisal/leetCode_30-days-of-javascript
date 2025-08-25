// Last updated: 8/26/2025, 1:22:15 AM
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var map = function(arr, fn) {
   for(i = 0; i < arr.length; i++){
    arr[i]=fn(arr[i], i);
   }
   return arr;
};