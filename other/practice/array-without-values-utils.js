/**
 * Creates an array excluding all given `values`.
 *
 * @param {Array<any>} arr The array to inspect.
 * @param {...any} values The values to exclude.
 * @returns {Array<any>} Returns the new array of filtered values.
 */
function without(arr, ...values) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const excludeSet = new Set(values);
  return arr.filter(item => !excludeSet.has(item));
}

module.exports = without;
