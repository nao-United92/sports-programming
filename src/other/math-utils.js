// src/other/math-utils.js

/**
 * Calculates the sum of all numbers in an array.
 *
 * @param {number[]} numbers The array of numbers to sum.
 * @returns {number} The sum of the numbers. Returns 0 for an empty array or non-array input.
 */
const sum = (numbers) => {
  if (!Array.isArray(numbers)) {
    return 0;
  }
  return numbers.reduce((acc, num) => (typeof num === 'number' && !isNaN(num) ? acc + num : acc), 0);
};

module.exports = {
  sum,
};
