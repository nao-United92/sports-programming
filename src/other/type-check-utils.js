/**
 * Checks if `value` is empty. A value is considered empty if it's `null`, `undefined`,
 * an empty string, an empty array, an empty object, an empty Map, or an empty Set.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 */
const isEmpty = (value) => {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === 'object') {
    if (value instanceof Map || value instanceof Set) {
      return value.size === 0;
    }
    // Add check for plain object
    if (value.constructor === Object) {
      return Object.keys(value).length === 0;
    }
    // For other object types (like Date, RegExp), they are not considered empty
    return false;
  }

  return false;
};

module.exports = { isEmpty };