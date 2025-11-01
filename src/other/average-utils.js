
/**
 * Calculates the average of an array of numbers.
 *
 * @param {number[]} arr The array of numbers.
 * @returns {number} The average of the numbers.
 */
export const average = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }

  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
};

/**
 * Calculates the median of an array of numbers.
 *
 * @param {number[]} arr The array of numbers.
 * @returns {number} The median of the numbers.
 */
export const median = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }

  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }

  return sorted[mid];
};
