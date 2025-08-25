// Last updated: 8/26/2025, 1:22:06 AM
/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {

    return new Promise((res, rej) => {
        const results = [];
        let complated = 0;
        functions.forEach((fn, i) => {
            fn()
                .then((value) => {
                    results[i] = value
                    complated++
                    if (complated === functions.length) {
                        res(results)
                    }
                }).catch(err => rej(err))
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */