/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regular expression, else `false`.
 */
const isRegExp = (value) => {
  return Object.prototype.toString.call(value) === '[object RegExp]';
};

export { isRegExp };
