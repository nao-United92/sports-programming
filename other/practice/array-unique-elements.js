/**
 * Returns a new array with only the unique elements from the original array.
 *
 * @param {Array<any>} arr The input array.
 * @returns {Array<any>} A new array containing only the unique elements.
 */
function arrayUniqueElements(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  return [...new Set(arr)];
}

module.exports = arrayUniqueElements;