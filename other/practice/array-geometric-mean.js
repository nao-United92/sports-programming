/**
 * Calculates the geometric mean of an array of numbers.
 * @param {number[]} arr - The input array.
 * @returns {number} The geometric mean.
 */
export const geometricMean = (arr) => {
  if (arr.length === 0) return 0;
  const product = arr.reduce((acc, val) => acc * val, 1);
  return Math.pow(product, 1 / arr.length);
};
