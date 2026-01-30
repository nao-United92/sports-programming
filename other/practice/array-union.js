// other/practice/array-union.js
/**
 * Computes the union of two arrays.
 * The union contains all unique elements that are present in either of the arrays.
 *
 * @param {Array} arr1 The first array.
 * @param {Array} arr2 The second array.
 * @returns {Array} Returns a new array of unique elements from both arrays.
 * @example
 *
 * arrayUnion([1, 2, 3], [3, 4, 5]);
 * // => [1, 2, 3, 4, 5]
 *
 * arrayUnion([1, 2, 1], [2, 3, 2]);
 * // => [1, 2, 3]
 */
function arrayUnion(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    // If either input is not an array, return unique elements from the valid array
    if (Array.isArray(arr1)) {
      return [...new Set(arr1)];
    }
    if (Array.isArray(arr2)) {
      return [...new Set(arr2)];
    }
    return [];
  }

  const combined = [...arr1, ...arr2];
  return [...new Set(combined)];
}

module.exports = arrayUnion;
