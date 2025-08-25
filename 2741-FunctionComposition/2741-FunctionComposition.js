// Last updated: 8/26/2025, 1:22:19 AM
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {

    return function (x) {
        let temp = x;
        functions.reverse().forEach(fn => temp = fn(temp))
        return temp;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */