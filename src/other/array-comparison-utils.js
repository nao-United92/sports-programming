/**
 * Checks if two arrays are equal (contain the same elements in the same order).
 * @param {Array} arr1 The first array.
 * @param {Array} arr2 The second array.
 * @returns {boolean} True if the arrays are equal, false otherwise.
 */
export const isEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

/**
 * Checks if one array is a subset of another (all elements of the first array are present in the second).
 * @param {Array} subset The potential subset array.
 * @param {Array} superset The potential superset array.
 * @returns {boolean} True if the first array is a subset of the second, false otherwise.
 */
export const isSubset = (subset, superset) => {
  return subset.every(val => superset.includes(val));
};