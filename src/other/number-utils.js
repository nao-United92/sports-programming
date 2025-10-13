/**
 * Checks if a number is even.
 *
 * @param {number} n The number to check.
 * @returns {boolean} True if the number is even, false otherwise.
 */
export const isEven = (n) => n % 2 === 0;

/**
 * Checks if a number is odd.
 *
 * @param {number} n The number to check.
 * @returns {boolean} True if the number is odd, false otherwise.
 */
export const isOdd = (n) => n % 2 !== 0;

/**
 * Calculates the sum of an array of numbers.
 *
 * @param {number[]} arr The array of numbers.
 * @returns {number} The sum of the numbers.
 */
export const sum = (arr) => arr.reduce((acc, val) => acc + val, 0);