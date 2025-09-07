/**
 * Checks if a number is even.
 *
 * @param {number} num The number to check.
 * @returns {boolean} True if the number is even, false otherwise.
 */
export const isEven = (num) => num % 2 === 0;

/**
 * Checks if a number is odd.
 *
 * @param {number} num The number to check.
 * @returns {boolean} True if the number is odd, false otherwise.
 */
export const isOdd = (num) => num % 2 !== 0;

/**
 * Generates a random number within a specified range.
 *
 * @param {number} min The minimum value of the range.
 * @param {number} max The maximum value of the range.
 * @returns {number} A random number between min and max (inclusive).
 */
export const randomInRange = (min, max) => Math.random() * (max - min) + min;