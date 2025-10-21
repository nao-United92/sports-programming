/**
 * Checks if `value` is an empty object, collection, or string.
 *
 * @param {*} value The value to inspect.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (Array.isArray(value) || typeof value === 'string') {
    return !value.length;
  }
  if (typeof value === 'object') {
    return !Object.keys(value).length;
  }
  return false;
}

module.exports = { isEmpty };
