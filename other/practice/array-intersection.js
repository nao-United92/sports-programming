/**
 * Creates an array of unique values that are included in all given arrays.
 *
 * @param {Array} arr1 The first array.
 * @param {Array} arr2 The second array.
 * @returns {Array} Returns the new array of intersecting values.
 */
function intersection(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return [];
  }
  const set1 = new Set(arr1);
  // Filter elements from arr2 that are in set1, then convert to Set and back to Array for uniqueness
  return [...new Set(arr2.filter(element => set1.has(element)))];
}

module.exports = {
  intersection,
};
