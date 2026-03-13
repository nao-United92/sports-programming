/**
 * Calculates the population standard deviation of an array of numbers.
 * 
 * @param {number[]} arr 
 * @returns {number}
 */
const standardDeviationPopulation = (arr) => {
  if (arr.length === 0) return 0;
  const n = arr.length;
  const mean = arr.reduce((a, b) => a + b, 0) / n;
  const variance = arr.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / n;
  return Math.sqrt(variance);
};

module.exports = standardDeviationPopulation;
