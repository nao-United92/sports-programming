/**
 * Calculates the weighted sum of an array of numbers.
 * @param {number[]} values - The input numbers.
 * @param {number[]} weights - The weights.
 * @returns {number} The weighted sum.
 */
export const weightedSum = (values, weights) => {
  if (values.length !== weights.length) return 0;
  return values.reduce((acc, val, i) => acc + val * weights[i], 0);
};
