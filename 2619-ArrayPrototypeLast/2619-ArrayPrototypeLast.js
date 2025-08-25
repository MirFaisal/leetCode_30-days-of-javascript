// Last updated: 8/26/2025, 1:32:54 AM
/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
    if (this.length > 0) {
        return this[this.length - 1];
    }
    return -1
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */