/**
 * This method is like `findIndex` except that it iterates over elements of
 * `collection` from right to left.
 *
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {number} Returns the index of the matched element, else `-1`.
 */
export const findLastIndex = (array, predicate) => {
  if (!Array.isArray(array) || typeof predicate !== 'function') {
    return -1;
  }
  for (let i = array.length - 1; i >= 0; i--) {
    if (predicate(array[i], i, array)) {
      return i;
    }
  }
  return -1;
};
