/**
 * Creates a new array of elements at every nth index of `array`.
 *
 * @param {Array} arr The array to iterate over.
 * @param {number} nth The number of the index to return (e.g., 2 for every second element).
 * @param {number} [offset=0] The offset from which to start counting.
 * @returns {Array} Returns the new array of elements.
 */
function arrayEveryNth(arr, nth, offset = 0) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof nth !== 'number' || nth <= 0 || !Number.isInteger(nth)) {
    throw new TypeError('Expected nth to be a positive integer.');
  }
  if (typeof offset !== 'number' || offset < 0 || !Number.isInteger(offset)) {
    throw new TypeError('Expected offset to be a non-negative integer.');
  }

  const result = [];
  for (let i = offset; i < arr.length; i += nth) {
    result.push(arr[i]);
  }

  return result;
}

module.exports = arrayEveryNth;
