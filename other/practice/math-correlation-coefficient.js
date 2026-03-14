/**
 * Calculates the Pearson correlation coefficient between two arrays.
 * 
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 * @returns {number}
 */
const correlationCoefficient = (arr1, arr2) => {
  if (arr1.length !== arr2.length || arr1.length === 0) {
    throw new Error('Arrays must have the same non-zero length');
  }

  const n = arr1.length;
  const sum1 = arr1.reduce((a, b) => a + b, 0);
  const sum2 = arr2.reduce((a, b) => a + b, 0);
  const sum1Sq = arr1.reduce((a, b) => a + b * b, 0);
  const sum2Sq = arr2.reduce((a, b) => a + b * b, 0);
  const pSum = arr1.reduce((acc, val, i) => acc + val * arr2[i], 0);

  const num = pSum - (sum1 * sum2) / n;
  const den = Math.sqrt((sum1Sq - (sum1 * sum1) / n) * (sum2Sq - (sum2 * sum2) / n));

  if (den === 0) return 0;
  return num / den;
};

module.exports = correlationCoefficient;
