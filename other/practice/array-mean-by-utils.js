/**
 * This function calculates the mean of `array` of values as determined by `iteratee`.
 * The iteratee is invoked with one argument: (value).
 *
 * @param {Array} arr The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {number} Returns the mean.
 */
function arrayMeanBy(arr, iteratee) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof iteratee !== 'function') {
    throw new TypeError('Expected a function for the second argument.');
  }
  if (arr.length === 0) {
    return NaN; // Mean is undefined for an empty set
  }

  const sum = arr.reduce((currentSum, item) => currentSum + iteratee(item), 0);
  return sum / arr.length;
}

module.exports = arrayMeanBy;
