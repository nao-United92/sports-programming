/**
 * This function sums the values of `array` as determined by `iteratee`.
 * The iteratee is invoked with one argument: (value).
 *
 * @param {Array} arr The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {number} Returns the sum.
 */
function arraySumBy(arr, iteratee) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof iteratee !== 'function') {
    throw new TypeError('Expected a function for the second argument.');
  }

  return arr.reduce((sum, item) => sum + iteratee(item), 0);
}

module.exports = arraySumBy;
