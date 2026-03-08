/**
 * Computes the intersection of two arrays of objects based on a property.
 * @param {Object[]} arr1 - First array.
 * @param {Object[]} arr2 - Second array.
 * @param {string} property - The property to compare.
 * @returns {Object[]} The intersection.
 */
export const intersectionByProperty = (arr1, arr2, property) => {
  const ids2 = new Set(arr2.map(obj => obj[property]));
  return arr1.filter(obj => ids2.has(obj[property]));
};
