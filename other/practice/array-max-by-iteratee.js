/**
 * Returns the maximum element of an array based on the result of an iteratee function.
 * If the array is empty, it returns undefined. If multiple elements have the same maximum
 * computed value, the first one encountered is returned.
 *
 * @param {Array<any>} arr The input array.
 * @param {Function} iteratee The function invoked per iteration to generate the value for comparison.
 *                            It receives the element, its index, and the original array.
 * @returns {any | undefined} The element from the array that yielded the maximum value from the iteratee, or undefined if the array is empty.
 */
function arrayMaxByIteratee(arr, iteratee) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof iteratee !== 'function') {
    throw new TypeError('Expected a function for the second argument (iteratee).');
  }

  if (arr.length === 0) {
    return undefined;
  }

  let maxElement = arr[0];
  let maxValue = iteratee(arr[0], 0, arr);

  for (let i = 1; i < arr.length; i++) {
    const currentValue = iteratee(arr[i], i, arr);
    if (currentValue > maxValue) {
      maxValue = currentValue;
      maxElement = arr[i];
    }
  }

  return maxElement;
}

module.exports = arrayMaxByIteratee;
