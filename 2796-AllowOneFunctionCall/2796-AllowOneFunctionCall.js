// Last updated: 8/26/2025, 1:22:09 AM
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    let isOnesRun = false
    return function (...args) {
        if (!isOnesRun) {
            isOnesRun = true;
            return fn(...args)
        }
        return undefined;
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
