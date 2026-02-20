/**
 * Computes the sum of the values in an array.
 *
 * @param {number[]} arr - The array to iterate over.
 * @returns {number} The sum.
 */
export const sum = (arr) => {
  return arr.reduce((acc, val) => acc + val, 0);
};
