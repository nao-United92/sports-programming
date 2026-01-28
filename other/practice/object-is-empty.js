/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * @param {*} value The value to inspect.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 */
function isEmpty(value) {
  if (value === null || typeof value === 'undefined') {
    return true;
  }

  // Handle strings
  if (typeof value === 'string') {
    return value.length === 0;
  }

  // Handle arrays
  if (Array.isArray(value)) {
    return value.length === 0;
  }

  // Handle Maps and Sets
  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }
  
  // Handle plain objects
  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  return false;
}

module.exports = {
  isEmpty,
};
