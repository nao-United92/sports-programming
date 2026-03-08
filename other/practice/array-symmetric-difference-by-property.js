/**
 * Computes the symmetric difference between two arrays of objects based on a property.
 * @param {Object[]} arr1 - First array.
 * @param {Object[]} arr2 - Second array.
 * @param {string} property - The property to compare.
 * @returns {Object[]} The symmetric difference.
 */
export const symmetricDifferenceByProperty = (arr1, arr2, property) => {
  const ids1 = new Set(arr1.map(obj => obj[property]));
  const ids2 = new Set(arr2.map(obj => obj[property]));
  
  return [
    ...arr1.filter(obj => !ids2.has(obj[property])),
    ...arr2.filter(obj => !ids1.has(obj[property]))
  ];
};
