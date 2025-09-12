/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 */
export const isString = (value) => {
  return typeof value === 'string' ||
         (typeof value === 'object' && Object.prototype.toString.call(value) === '[object String]');
};
