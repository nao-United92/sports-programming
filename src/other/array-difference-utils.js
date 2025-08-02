/**
 * Creates an array of array values not included in the other given arrays.
 * The order of result values is determined by the first array.
 *
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The arrays to exclude.
 * @returns {Array} Returns the new array of filtered values.
 */
export function difference(array, ...values) {
  if (!Array.isArray(array)) {
    return [];
  }
  const exclude = new Set(values.flat());
  return array.filter(item => !exclude.has(item));
}

/**
 * This function is like `difference` except that it accepts `iteratee` which
 * is invoked for each element of `array` and `values` to generate the criterion
 * by which they're compared.
 *
 * @param {Array} array The array to inspect.
 * @param {Array} values The array of values to exclude.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {Array} Returns the new array of filtered values.
 */
export function differenceBy(array, values, iteratee) {
  if (!Array.isArray(array)) {
    return [];
  }
  const exclude = new Set(values.map(iteratee));
  return array.filter(item => !exclude.has(iteratee(item)));
}
