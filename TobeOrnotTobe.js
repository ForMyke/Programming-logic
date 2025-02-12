/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: function (compareVal) {
      if (val === compareVal) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (compareVal) {
      if (val !== compareVal) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};
