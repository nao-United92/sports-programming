
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
