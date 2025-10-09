/**
 * Calculates the sum of an array of numbers.
 * @param {number[]} numbers The array of numbers.
 * @returns {number} The sum of the numbers.
 */
export const sum = (numbers) => numbers.reduce((acc, num) => acc + num, 0);

/**
 * Calculates the product of an array of numbers.
 * @param {number[]} numbers The array of numbers.
 * @returns {number} The product of the numbers.
 */
export const product = (numbers) => numbers.reduce((acc, num) => acc * num, 1);
