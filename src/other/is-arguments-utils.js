/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object, else `false`.
 */
export const isArguments = (value) => {
  return Object.prototype.toString.call(value) === '[object Arguments]';
};
