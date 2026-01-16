/**
 * Computes the intersection of two arrays.
 * Returns a new array of elements that are common to both arrays.
 *
 * @param {Array} arr1 The first array.
 * @param {Array} arr2 The second array.
 * @returns {Array} A new array containing the common elements.
 */
function arrayIntersection(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new TypeError('Expected both arguments to be arrays.');
  }

  const set1 = new Set(arr1);
  return Array.from(new Set(arr2.filter(item => set1.has(item))));
}

module.exports = arrayIntersection;