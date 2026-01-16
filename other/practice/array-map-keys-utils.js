/**
 * Creates a new array of objects, where each object's keys are transformed by an `iteratee` function.
 * The iteratee is invoked with one argument: (key).
 *
 * @param {Array<Object>} arr The array of objects to iterate over.
 * @param {Function} iteratee The iteratee invoked per key to transform it.
 * @returns {Array<Object>} Returns the new array of objects with transformed keys.
 */
function arrayMapKeys(arr, iteratee) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof iteratee !== 'function') {
    throw new TypeError('Expected a function for the second argument.');
  }

  return arr.map(obj => {
    if (typeof obj !== 'object' || obj === null) {
      return obj; // Return non-object elements as is
    }
    const newObj = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[iteratee(key)] = obj[key];
      }
    }
    return newObj;
  });
}

module.exports = arrayMapKeys;
