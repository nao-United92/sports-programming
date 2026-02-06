/**
 * Computes the intersection of two arrays, returning all unique elements that appear in both arrays.
 * @param {Array<any>} arr1 The first array.
 * @param {Array<any>} arr2 The second array.
 * @returns {Array<any>} A new array containing the intersection of elements.
 */
function intersection(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new TypeError('Expected both inputs to be arrays');
  }
  const set1 = new Set(arr1);
  return [...new Set(arr2.filter(item => set1.has(item)))];
}

module.exports = intersection;