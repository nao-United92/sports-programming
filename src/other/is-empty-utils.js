/**
 * Checks if a value is empty.
 * Supports Object, Array, String, Map, Set.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the value is empty, else `false`.
 */
export function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (Array.isArray(value) || typeof value === 'string') {
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
