/**
 * Checks if `value` is classified as an `Error` object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `Error` object, else `false`.
 */
const isError = (value) => {
  if (value === null || typeof value !== 'object') {
    return false;
  }
  // Check if it's an instance of Error or a subclass
  if (value instanceof Error) {
    return true;
  }
  // Fallback for cross-realm objects or if instanceof doesn't work as expected
  return Object.prototype.toString.call(value) === '[object Error]';
};

export default isError;