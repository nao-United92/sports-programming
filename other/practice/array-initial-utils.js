/**
 * Gets all but the last element of `array`.
 *
 * @param {Array} arr The array to query.
 * @returns {Array} Returns the slice of `array`.
 */
function arrayInitial(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (arr.length <= 1) {
    return [];
  }
  return arr.slice(0, arr.length - 1);
}

module.exports = arrayInitial;
