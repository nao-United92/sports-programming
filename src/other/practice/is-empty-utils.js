/**
 * Checks if `value` is an empty object, collection, or string.
 *
 * @param {*} value The value to inspect.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 */
const isEmpty = (value) => {
  if (value == null) {
    return true;
  }

  if (typeof value === 'boolean' || typeof value === 'number' || typeof value === 'function') {
    return false;
  }

  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  return false;
};

export { isEmpty };
