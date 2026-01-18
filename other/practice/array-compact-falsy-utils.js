// other/practice/array-compact-falsy-utils.js

/**
 * Creates an array with all falsy values removed. The values `false`, `null`, `0`, `""`, `undefined`, and `NaN` are falsy.
 *
 * @param {Array} arr The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 */
function arrayCompactFalsy(arr) {
  if (!Array.isArray(arr)) {
    return []; // Or throw an error, depending on desired behavior for non-arrays
  }
  return arr.filter(Boolean);
}

module.exports = arrayCompactFalsy;