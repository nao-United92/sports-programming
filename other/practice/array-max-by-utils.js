/**
 * Iterates over elements of `array`, returning the maximum value of a specific property or computed value.
 *
 * @param {Array<T>} array The array to iterate over.
 * @param {function(T): number} iteratee The function invoked per iteration to compute the value to compare.
 * @returns {T|undefined} Returns the maximum value. `undefined` if the array is empty.
 * @template T
 */
function maxBy(array, iteratee) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof iteratee !== 'function') {
    throw new TypeError('Expected a function for the iteratee argument.');
  }
  if (array.length === 0) {
    return undefined;
  }

  let maxElement = array[0];
  let maxValue = iteratee(array[0]);

  for (let i = 1; i < array.length; i++) {
    const currentValue = iteratee(array[i]);
    if (currentValue > maxValue) {
      maxValue = currentValue;
      maxElement = array[i];
    }
  }

  return maxElement;
}

export default maxBy;
