/**
 * Creates a slice of `array` with `n` elements taken from the end.
 *
 * @param {Array} arr The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @returns {Array} Returns the slice of `array`.
 */
function arrayTakeRight(arr, n = 1) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    throw new TypeError('Expected n to be a non-negative integer.');
  }
  if (n === 0) {
    return [];
  }
  if (n >= arr.length) {
    return [...arr];
  }
  return arr.slice(arr.length - n);
}

module.exports = arrayTakeRight;