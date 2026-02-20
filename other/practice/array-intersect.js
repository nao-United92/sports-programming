/**
 * Returns an array of unique values that are included in all given arrays.
 *
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} The intersection of the two arrays.
 */
export const intersect = (arr1, arr2) => {
  const set2 = new Set(arr2);
  return [...new Set(arr1.filter(item => set2.has(item)))];
};
