// Last updated: 8/26/2025, 1:21:57 AM
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return [...args].length  
};

/**
 * argumentsLength(1, 2, 3); // 3
 */