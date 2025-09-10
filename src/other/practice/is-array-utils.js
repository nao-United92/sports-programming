/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 */
const isArray = (value) => {
  return Array.isArray(value);
};

export { isArray };
