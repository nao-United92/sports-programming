/**
 * Returns an array of unique values, in order, from all given arrays.
 *
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} The union of the two arrays.
 */
export const union = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2])];
};
