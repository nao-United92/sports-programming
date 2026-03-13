/**
 * Checks if two arrays have any common elements and returns them.
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @returns {Array} Common elements
 */
const getOverlap = (arr1, arr2) => {
  const set2 = new Set(arr2);
  return arr1.filter((item) => set2.has(item));
};

module.exports = getOverlap;
