/**
 * Calculates the average of a specific property across an array of objects.
 * 
 * @param {Array<Object>} array - The array of objects to process.
 * @param {string} property - The property name to average.
 * @returns {number} The calculated average. Returns 0 if array is empty or property doesn't exist.
 */
function averageByProperty(array, property) {
  if (!Array.isArray(array) || array.length === 0) {
    return 0;
  }

  const sum = array.reduce((acc, obj) => {
    const value = obj[property];
    return acc + (typeof value === 'number' ? value : 0);
  }, 0);

  return sum / array.length;
}

module.exports = averageByProperty;
