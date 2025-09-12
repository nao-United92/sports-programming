/**
 * Checks if `value` is classified as a `Boolean` primitive or object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 */
export const isBoolean = (value) => {
  return value === true || value === false ||
         (typeof value === 'object' && Object.prototype.toString.call(value) === '[object Boolean]');
};
