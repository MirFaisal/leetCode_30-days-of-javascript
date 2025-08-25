// Last updated: 8/26/2025, 1:22:10 AM
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
   count = init;
    return {
        increment: function () { return ++count },
        decrement: function () { return --count },
        reset: function () { return count = init }
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */