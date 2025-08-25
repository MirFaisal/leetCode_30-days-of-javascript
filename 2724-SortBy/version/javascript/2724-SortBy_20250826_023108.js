// Last updated: 8/26/2025, 2:31:08 AM
/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    return this.reduce((group, item) => {

        if (!group[fn(item)]) {
            group[fn(item)] = [];
        }
        group[fn(item)].push(item);
        return group;
    }, {})
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */