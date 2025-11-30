/**
 * Calculates the moving average of an array of numbers.
 * @param {number[]} arr The array of numbers.
 * @param {number} size The window size.
 * @returns {number[]} The array of moving averages.
 */
export const movingAverage = (arr, size) => {
  if (size <= 0 || !Number.isInteger(size)) {
    throw new Error('Size must be a positive integer.');
  }
  if (arr.length < size) {
    return [];
  }
  const result = [];
  for (let i = 0; i <= arr.length - size; i++) {
    const window = arr.slice(i, i + size);
    const average = window.reduce((sum, val) => sum + val, 0) / size;
    result.push(average);
  }
  return result;
};
