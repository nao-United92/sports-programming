/**
 * Creates a new array excluding all given values.
 *
 * @param {Array} arr The array to inspect.
 * @param {...*} values The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 */
function arrayWithout(arr, ...values) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }

  const valuesToRemove = new Set(values);
  return arr.filter(item => !valuesToRemove.has(item));
}

module.exports = arrayWithout;