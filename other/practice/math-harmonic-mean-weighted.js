/**
 * Calculates the weighted harmonic mean of an array of numbers.
 * 
 * @param {number[]} values 
 * @param {number[]} weights 
 * @returns {number}
 */
const harmonicMeanWeighted = (values, weights) => {
  if (values.length !== weights.length || values.length === 0) {
    throw new Error('Arrays must have the same non-zero length');
  }

  const weightSum = weights.reduce((a, b) => a + b, 0);
  const weightedSumInverse = values.reduce((acc, val, i) => {
    if (val === 0) throw new Error('Values must be non-zero');
    return acc + weights[i] / val;
  }, 0);

  return weightSum / weightedSumInverse;
};

module.exports = harmonicMeanWeighted;
