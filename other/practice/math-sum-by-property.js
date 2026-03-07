/**
 * Calculates the sum of a specific property across an array of objects.
 * 
 * @param {Array<Object>} array - The array of objects to process.
 * @param {string} property - The property name to sum.
 * @returns {number} The calculated sum. Returns 0 if array is empty or property doesn't exist.
 */
function sumByProperty(array, property) {
  if (!Array.isArray(array) || array.length === 0) {
    return 0;
  }

  return array.reduce((acc, obj) => {
    const value = obj[property];
    return acc + (typeof value === 'number' ? value : 0);
  }, 0);
}

module.exports = sumByProperty;
