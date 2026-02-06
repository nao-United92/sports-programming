/**
 * Calculates the mean (average) of an array of numbers.
 * @param {Array<number>} arr The array of numbers.
 * @returns {number} The mean of the numbers.
 */
function mean(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  if (arr.length === 0) {
    return 0; // Or throw an error, depending on desired behavior for empty arrays
  }
  if (arr.some(isNaN)) {
    throw new TypeError('All elements in the array must be numbers');
  }
  return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}

module.exports = mean;
