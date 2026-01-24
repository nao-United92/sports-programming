/**
 * Iterates over elements of `array`, returning the minimum value of a specific property or computed value.
 *
 * @param {Array<T>} array The array to iterate over.
 * @param {function(T): number} iteratee The function invoked per iteration to compute the value to compare.
 * @returns {T|undefined} Returns the minimum value. `undefined` if the array is empty.
 * @template T
 */
function minBy(array, iteratee) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof iteratee !== 'function') {
    throw new TypeError('Expected a function for the iteratee argument.');
  }
  if (array.length === 0) {
    return undefined;
  }

  let minElement = array[0];
  let minValue = iteratee(array[0]);

  for (let i = 1; i < array.length; i++) {
    const currentValue = iteratee(array[i]);
    if (currentValue < minValue) {
      minValue = currentValue;
      minElement = array[i];
    }
  }

  return minElement;
}

export default minBy;
