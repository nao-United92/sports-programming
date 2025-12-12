/**
 * Creates a duplicate-free version of an array, in which only the first
 * occurrence of each element is kept. The order of result values is
 * determined by the order of the first occurrence of each value in the array.
 *
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * uniqueAll([2, 1, 2, 3, 1]);
 * // => [2, 1, 3]
 *
 * uniqueAll(['a', 'b', 'a', 'c', 'b']);
 * // => ['a', 'b', 'c']
 */
function uniqueAll(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  return [...new Set(array)];
}

export default uniqueAll;