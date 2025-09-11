const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string-keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, and strings are
 * considered empty if they have a `length` of `0`. Similarly, maps and sets
 * are considered empty if they have a `size` of `0`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 */
export const isEmpty = (value) => {
  if (value == null) {
    return true;
  }

  const isArrayLike = value != null && typeof value.length == 'number' && value.length >= 0;

  if (isArrayLike) {
    return value.length === 0;
  }

  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  if (typeof value === 'object') {
    for (const key in value) {
      if (hasOwnProperty.call(value, key)) {
        return false;
      }
    }
    return true;
  }

  // For other primitives like numbers, booleans
  return true;
};