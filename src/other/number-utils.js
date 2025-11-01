/**
 * Generates a random integer within a specified range (inclusive).
 *
 * @param {number} min The minimum value (inclusive).
 * @param {number} max The maximum value (inclusive).
 * @returns {number} A random integer between min and max.
 */
export const randomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Calculates the sum of all numbers in an array.
 *
 * @param {number[]} numbers The array of numbers to sum.
 * @returns {number} The sum of the numbers.
 */
export const sum = (numbers) => {
  return numbers.reduce((acc, current) => acc + current, 0);
};