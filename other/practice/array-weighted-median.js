/**
 * Calculates the weighted median of an array of numbers.
 * @param {number[]} values - The input numbers.
 * @param {number[]} weights - The weights.
 * @returns {number} The weighted median.
 */
export const weightedMedian = (values, weights) => {
  if (values.length !== weights.length || values.length === 0) return 0;
  
  const combined = values.map((v, i) => ({ v, w: weights[i] }));
  combined.sort((a, b) => a.v - b.v);
  
  const totalWeight = weights.reduce((acc, w) => acc + w, 0);
  const threshold = totalWeight / 2;
  
  let currentWeight = 0;
  for (const { v, w } of combined) {
    currentWeight += w;
    if (currentWeight >= threshold) return v;
  }
  return combined[combined.length - 1].v;
};
