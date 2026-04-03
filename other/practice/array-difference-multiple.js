/**
 * Returns the elements in the first array that are NOT in any of the subsequent arrays.
 * 
 * @param {Array} array - The first array.
 * @param {...Array} arrays - The arrays to subtract from the first array.
 * @returns {Array} - An array of unique elements in the first array not found in others.
 */
function arrayDifferenceMultiple(array, ...arrays) {
  if (!array) return [];
  const otherElements = new Set(arrays.flat());
  return array.filter(item => !otherElements.has(item));
}

module.exports = arrayDifferenceMultiple;
