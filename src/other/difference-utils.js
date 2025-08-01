
/**
 * Creates an array of `array` values not included in the other given arrays.
 *
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 */
export function difference(array, ...values) {
  if (!Array.isArray(array)) {
    return [];
  }
  const flatValues = values.flat();
  const valueSet = new Set(flatValues);
  return array.filter(val => !valueSet.has(val));
}
