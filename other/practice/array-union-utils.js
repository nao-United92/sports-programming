/**
 * Computes the union of two arrays.
 * Returns a new array of unique elements that are present in either of the two arrays.
 *
 * @param {Array} arr1 The first array.
 * @param {Array} arr2 The second array.
 * @returns {Array} A new array containing the unique elements from both arrays.
 */
function arrayUnion(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new TypeError('Expected both arguments to be arrays.');
  }

  const combined = [...arr1, ...arr2];
  return [...new Set(combined)];
}

module.exports = arrayUnion;