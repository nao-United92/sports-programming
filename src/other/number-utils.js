/**
 * Checks if a number is even.
 *
 * @param {number} num The number to check.
 * @returns {boolean} Returns `true` if the number is even, else `false`.
 */
export const isEven = (num) => num % 2 === 0;

/**
 * Checks if a number is odd.
 *
 * @param {number} num The number to check.
 * @returns {boolean} Returns `true` if the number is odd, else `false`.
 */
export const isOdd = (num) => num % 2 !== 0;

/**
 * Calculates the average of an array of numbers.
 *
 * @param {number[]} arr The array of numbers.
 * @returns {number} Returns the average of the numbers.
 */
export const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
