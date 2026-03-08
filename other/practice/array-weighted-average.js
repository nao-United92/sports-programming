/**
 * Calculates the weighted average of an array of numbers.
 * @param {number[]} values - The numbers to average.
 * @param {number[]} weights - The corresponding weights.
 * @returns {number} The weighted average.
 */
export const weightedAverage = (values, weights) => {
  if (values.length !== weights.length || values.length === 0) return 0;
  
  const sum = values.reduce((acc, val, i) => acc + val * weights[i], 0);
  const totalWeight = weights.reduce((acc, w) => acc + w, 0);
  
  return totalWeight === 0 ? 0 : sum / totalWeight;
};
