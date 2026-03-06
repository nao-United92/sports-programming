/**
 * Calculates the variance of a set of numbers.
 * @param {Array<number>} arr - The array of numbers.
 * @returns {number} The variance.
 */
function variance(arr) {
  if (arr.length === 0) return 0;
  const mean = arr.reduce((sum, n) => sum + n, 0) / arr.length;
  const squareDiffs = arr.map(n => Math.pow(n - mean, 2));
  return squareDiffs.reduce((sum, n) => sum + n, 0) / arr.length;
}

/**
 * Calculates the standard deviation of a set of numbers.
 * @param {Array<number>} arr - The array of numbers.
 * @returns {number} The standard deviation.
 */
function standardDeviation(arr) {
  return Math.sqrt(variance(arr));
}

module.exports = { variance, standardDeviation };
