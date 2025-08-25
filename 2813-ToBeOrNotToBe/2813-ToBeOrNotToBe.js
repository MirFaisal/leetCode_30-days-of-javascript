// Last updated: 8/26/2025, 1:22:04 AM
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return{
        toBe: function (ex){
            if(ex===val){
                return true;
            }else{
                throw new Error("Not Equal");
            }
        },
        notToBe: function(ex){
            if(ex!==val){
                return true;
            }else{
                throw new Error("Equal");
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */