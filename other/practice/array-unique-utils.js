/**
 * Returns a new array with unique elements.
 *
 * @param {Array} arr The array to process.
 * @returns {Array} A new array containing only the unique elements from the original array.
 */
function arrayUnique(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  return [...new Set(arr)];
}

module.exports = arrayUnique;