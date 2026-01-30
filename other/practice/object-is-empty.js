// other/practice/object-is-empty.js
/**
 * Checks if an object has no enumerable own properties.
 * Arrays are considered non-empty if they have a length greater than 0.
 *
 * @param {Object} obj The object to inspect.
 * @returns {boolean} Returns `true` if the object is empty, `false` otherwise.
 * @example
 *
 * objectIsEmpty({});
 * // => true
 *
 * objectIsEmpty({ 'a': 1 });
 * // => false
 *
 * objectIsEmpty(null);
 * // => true
 *
 * objectIsEmpty(undefined);
 * // => true
 *
 * objectIsEmpty([]);
 * // => false
 *
 * objectIsEmpty([1, 2]);
 * // => false
 */
function objectIsEmpty(obj) {
  if (obj === null || obj === undefined) {
    return true;
  }
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  if (typeof obj !== 'object') {
    return true; // Primitives are considered "empty" in this context
  }
  return Object.keys(obj).length === 0;
}

module.exports = objectIsEmpty;
