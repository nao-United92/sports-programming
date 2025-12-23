/**
 * Creates an array with all falsy values removed. The values false, null, 0, "", undefined, and NaN are falsy.
 *
 * @param {Array<any>} arr The array to compact.
 * @returns {Array<any>} Returns the new array of filtered values.
 */
function removeFalsy(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.filter(Boolean);
}

module.exports = removeFalsy;
