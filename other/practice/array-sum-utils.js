/**
 * Calculates the sum of all numbers in an array.
 * @param {Array<number>} arr The array of numbers.
 * @returns {number} The sum of the numbers.
 */
function sum(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  if (arr.some(isNaN)) {
    throw new TypeError('All elements in the array must be numbers');
  }
  return arr.reduce((total, num) => total + num, 0);
}

module.exports = sum;
