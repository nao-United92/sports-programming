/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 */
const isString = (value) => {
  return typeof value === 'string' || (typeof value === 'object' && value !== null && Object.prototype.toString.call(value) === '[object String]');
};

export { isString };
