/**
 * Checks if an array contains any of the specified values.
 *
 * @param {Array} arr The array to check.
 * @param {Array} values The values to search for.
 * @returns {boolean} Returns `true` if the array contains any of the values, `false` otherwise.
 */
const containsAny = (arr, values) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (!Array.isArray(values)) {
    throw new TypeError('Expected an array for the second argument.');
  }
  return arr.some(item => values.includes(item));
};

export default containsAny;
