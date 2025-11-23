/**
 * This method is like `find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {number} Returns the index of the matched element, else `-1`.
 */
export const findIndex = (array, predicate) => {
  if (!Array.isArray(array) || typeof predicate !== 'function') {
    return -1;
  }
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      return i;
    }
  }
  return -1;
};