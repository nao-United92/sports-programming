/**
 * Calculates the sum of all numbers in an array.
 *
 * @param {Array<number>} array The array of numbers to sum.
 * @returns {number} The sum of the numbers in the array. Returns 0 for an empty array.
 */
const arraySum = (array) => {
  return array.reduce((acc, current) => acc + current, 0);
};

export default arraySum;