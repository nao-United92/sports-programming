/**
 * Checks if a value is empty.
 * Empty is defined as: null, undefined, an empty string, an empty array, an empty object, an empty Map, an empty Set, or NaN.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is empty, false otherwise.
 */
function isEmpty(value) {
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
    return Object.keys(value).length === 0;
  }

  if (typeof value === 'number') {
    return isNaN(value);
  }

  return false;
}

export { isEmpty };