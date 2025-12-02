/**
 * Calculates the sample standard deviation of an array of numbers.
 * The sample standard deviation is used when the data is a sample of a larger population.
 * @param {number[]} arr The array of numbers (sample).
 * @returns {number | null} The sample standard deviation. Returns null for invalid input, 0 for arrays with fewer than 2 elements.
 */
export const sampleStandardDeviation = (arr) => {
  if (!arr || !Array.isArray(arr)) {
    return null;
  }
  if (arr.length < 2) {
    return 0;
  }

  const n = arr.length;
  const mean = arr.reduce((a, b) => a + b) / n;
  
  // For sample standard deviation, the denominator is n-1
  const variance = arr.reduce((a, b) => a + (b - mean) ** 2, 0) / (n - 1);
  
  return Math.sqrt(variance);
};
