/**
 * Calculates the harmonic mean of an array of numbers.
 * @param {number[]} arr - The input array.
 * @returns {number} The harmonic mean.
 */
export const harmonicMean = (arr) => {
  if (arr.length === 0) return 0;
  const reciprocalSum = arr.reduce((acc, val) => acc + (1 / val), 0);
  return arr.length / reciprocalSum;
};
