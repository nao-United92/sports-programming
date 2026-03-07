/**
 * Calculates the standard deviation of an array of numbers.
 * 
 * @param {Array<number>} numbers - The array of numbers to process.
 * @param {boolean} population - Whether to calculate population SD (true) or sample SD (false).
 * @returns {number} The standard deviation. Returns 0 if array length is less than 2 (sample) or 0 (population).
 */
function standardDeviation(numbers, population = false) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }
  
  if (!population && numbers.length < 2) {
    return 0;
  }

  const mean = numbers.reduce((a, b) => a + b) / numbers.length;
  const variance = numbers.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / (numbers.length - (population ? 0 : 1));

  return Math.sqrt(variance);
}

module.exports = standardDeviation;
