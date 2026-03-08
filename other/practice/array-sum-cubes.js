/**
 * Calculates the sum of cubes of all numbers in an array.
 * @param {number[]} arr - The input numbers.
 * @returns {number} The sum of cubes.
 */
export const sumCubes = (arr) => {
  return arr.reduce((acc, val) => acc + Math.pow(val, 3), 0);
};
