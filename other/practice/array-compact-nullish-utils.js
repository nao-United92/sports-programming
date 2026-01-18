// other/practice/array-compact-nullish-utils.js

/**
 * Creates an array with all `null` and `undefined` values removed.
 * The new array contains only truthy values in the JavaScript sense.
 *
 * @param {Array} arr The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 */
function arrayCompactNullish(arr) {
  if (!Array.isArray(arr)) {
    return []; // Or throw an error, depending on desired behavior for non-arrays
  }
  return arr.filter(item => item !== null && item !== undefined);
}

module.exports = arrayCompactNullish;