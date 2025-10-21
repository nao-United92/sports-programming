/**
 * Checks if a number is even.
 * @param {number} num The number to check.
 * @returns {boolean} True if the number is even, false otherwise.
 */
export function isEven(num) {
  return num % 2 === 0;
}

/**
 * Checks if a number is odd.
 * @param {number} num The number to check.
 * @returns {boolean} True if the number is odd, false otherwise.
 */
export function isOdd(num) {
  return num % 2 !== 0;
}

/**
 * Generates a random integer within a specified range (inclusive).
 * @param {number} min The minimum value (inclusive).
 * @param {number} max The maximum value (inclusive).
 * @returns {number} A random integer between min and max.
 * @throws {Error} If min is greater than max.
 */
export function randomInt(min, max) {
  if (min > max) {
    throw new Error('min cannot be greater than max');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
