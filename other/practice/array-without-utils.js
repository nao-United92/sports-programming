/**
 * Creates an array excluding all given values.
 *
 * @param {Array} array The array to inspect.
 * @param {...*} values The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * without([1, 2, 3, 1, 4], 1, 4);
 * // => [2, 3]
 *
 * without(['a', 'b', 'c', 'a'], 'a');
 * // => ['b', 'c']
 */
function without(array, ...values) {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.filter((item) => !values.includes(item));
}

export default without;