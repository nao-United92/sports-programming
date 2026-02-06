/**
 * Computes the union of two arrays, returning all unique elements that appear in either array.
 * @param {Array<any>} arr1 The first array.
 * @param {Array<any>} arr2 The second array.
 * @returns {Array<any>} A new array containing the union of elements.
 */
function union(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new TypeError('Expected both inputs to be arrays');
  }
  return [...new Set([...arr1, ...arr2])];
}

module.exports = union;
