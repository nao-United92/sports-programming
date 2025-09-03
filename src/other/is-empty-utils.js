/**
 * Checks if a value is empty.
 *
 * A value is considered empty if it's:
 * - null or undefined
 * - an empty string, array, Map, or Set
 * - an object with no own enumerable string-keyed properties
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns true if the value is empty, else false.
 */
export const isEmpty = (value) => {
  if (value == null) {
    return true;
  }

  if (Array.isArray(value) || typeof value === 'string') {
    return value.length === 0;
  }

  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  // Check for objects created with `Object.create(null)`
  if (value.constructor === undefined && Object.keys(value).length === 0) {
    return true;
  }

  if (typeof value === 'object' && value.constructor === Object) {
    return Object.keys(value).length === 0;
  }

  return false;
};
