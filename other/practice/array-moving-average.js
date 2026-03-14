/**
 * Calculates the moving average of an array of numbers.
 * 
 * @param {number[]} arr 
 * @param {number} windowSize 
 * @returns {number[]}
 */
const movingAverage = (arr, windowSize) => {
  if (windowSize <= 0 || windowSize > arr.length) return [];
  const result = [];
  for (let i = 0; i <= arr.length - windowSize; i++) {
    const window = arr.slice(i, i + windowSize);
    const average = window.reduce((a, b) => a + b, 0) / windowSize;
    result.push(average);
  }
  return result;
};

module.exports = movingAverage;
