/**
 * This function returns the maximum value of `array` as determined by `iteratee`.
 * The iteratee is invoked with one argument: (value).
 *
 * @param {Array} arr The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 */
function arrayMaxBy(arr, iteratee) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof iteratee !== 'function') {
    throw new TypeError('Expected a function for the second argument.');
  }
  if (arr.length === 0) {
    return undefined; // Or throw an error, depending on desired behavior for empty arrays
  }

  let maxVal = arr[0];
  let maxComputed = iteratee(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    const currentComputed = iteratee(arr[i]);
    if (currentComputed > maxComputed) {
      maxComputed = currentComputed;
      maxVal = arr[i];
    }
  }

  return maxVal;
}

module.exports = arrayMaxBy;