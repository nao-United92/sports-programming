/**
 * Creates a duplicate-free version of an array.
 *
 * @param {Array<any>} arr The array to inspect.
 * @returns {Array<any>} Returns the new duplicate free array.
 */
function uniqueValues(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return Array.from(new Set(arr));
}

module.exports = uniqueValues;
