// Last updated: 8/26/2025, 1:22:14 AM
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {

    return async function (...args) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject("Time Limit Exceeded")
            }, t)

            fn(...args)
                .then(response => {
                    clearTimeout(timer);
                    resolve(response)
                })
                .catch((err) => {
                    clearTimeout(timer);
                    reject(err);
                });
        })
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */