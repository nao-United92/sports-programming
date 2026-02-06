/**
 * Finds the minimum value in an array of numbers.
 * @param {Array<number>} arr The array of numbers.
 * @returns {number | undefined} The minimum number in the array, or undefined if the array is empty.
 */
function min(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  if (arr.length === 0) {
    return undefined;
  }
  if (arr.some(isNaN)) {
    throw new TypeError('All elements in the array must be numbers');
  }
  return Math.min(...arr);
}

module.exports = min;
