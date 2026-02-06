/**
 * Finds the maximum value in an array of numbers.
 * @param {Array<number>} arr The array of numbers.
 * @returns {number | undefined} The maximum number in the array, or undefined if the array is empty.
 */
function max(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  if (arr.length === 0) {
    return undefined;
  }
  if (arr.some(isNaN)) {
    throw new TypeError('All elements in the array must be numbers');
  }
  return Math.max(...arr);
}

module.exports = max;
