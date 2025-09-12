/**
 * Checks if `value` is an `Error` object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
 */
export const isError = (value) => {
  if (value === null || typeof value !== 'object') {
    return false;
  }
  const tag = Object.prototype.toString.call(value);
  return tag === '[object Error]' || tag === '[object DOMException]';
};
