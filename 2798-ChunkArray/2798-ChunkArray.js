// Last updated: 8/26/2025, 1:22:07 AM
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    const chunks = [];
    let chunk = [];
    for (i = 0; i < arr.length; i++) {
        chunk.push(arr[i]);
        
        if(chunk.length === size){
            chunks.push(chunk);
            chunk = [];
        }
    }
    if(chunk.length){
        chunks.push(chunk);
    }
    return chunks;
};
