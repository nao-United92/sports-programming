/**
 * Calculates the sum of squares of all numbers in an array.
 * @param {number[]} arr - The input numbers.
 * @returns {number} The sum of squares.
 */
export const sumSquares = (arr) => {
  return arr.reduce((acc, val) => acc + val * val, 0);
};
