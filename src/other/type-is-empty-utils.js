/**
 * Checks if `value` is an empty object, collection, map, or set.
 * Objects are considered empty if they have no own enumerable string keyed properties.
 *
 * @param {any} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 */
function isEmpty(value) {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0;
  }

  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  return false;
}

module.exports = { isEmpty };
