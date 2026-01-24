/**
 * This function is like `find` except that it iterates over elements of `collection` from right to left.
 *
 * @param {Array<T>} array The array to inspect.
 * @param {function(T, number, Array<T>): boolean} predicate The function invoked per iteration.
 * @returns {T|undefined} Returns the matched element, else `undefined`.
 * @template T
 */
function findLast(array, predicate) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function for the predicate argument.');
  }

  for (let i = array.length - 1; i >= 0; i--) {
    if (predicate(array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
}

export default findLast;
