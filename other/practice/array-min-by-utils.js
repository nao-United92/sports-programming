/**
 * This function returns the minimum value of `array` as determined by `iteratee`.
 * The iteratee is invoked with one argument: (value).
 *
 * @param {Array} arr The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 */
function arrayMinBy(arr, iteratee) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof iteratee !== 'function') {
    throw new TypeError('Expected a function for the second argument.');
  }
  if (arr.length === 0) {
    return undefined; // Or throw an error, depending on desired behavior for empty arrays
  }

  let minVal = arr[0];
  let minComputed = iteratee(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    const currentComputed = iteratee(arr[i]);
    if (currentComputed < minComputed) {
      minComputed = currentComputed;
      minVal = arr[i];
    }
  }

  return minVal;
}

module.exports = arrayMinBy;