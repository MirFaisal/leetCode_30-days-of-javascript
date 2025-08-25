// Last updated: 8/26/2025, 1:22:00 AM
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    if (typeof (obj) == 'object') {
        return Object.keys(obj).length == 0;
    }
};