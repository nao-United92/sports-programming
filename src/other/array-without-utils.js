/**
 * Creates an array excluding all given values.
 *
 * @param {Array} array The array to inspect.
 * @param {...*} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 */
export const without = (array, ...values) => {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.filter(item => !values.includes(item));
};
