/**
 * Calculates the standard score (z-score) for each element in an array.
 * @param {number[]} arr - The input numbers.
 * @returns {number[]} The z-scores.
 */
export const standardScore = (arr) => {
  if (arr.length === 0) return [];
  const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
  const stdDev = Math.sqrt(arr.reduce((sq, n) => sq + Math.pow(n - mean, 2), 0) / arr.length);
  return stdDev === 0 ? arr.map(() => 0) : arr.map(n => (n - mean) / stdDev);
};
