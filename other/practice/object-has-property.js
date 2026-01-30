// other/practice/object-has-property.js
/**
 * Checks if an object has a specified property (own or inherited).
 * This is a safer alternative to `in` operator as it handles null/undefined objects
 * and correctly checks properties on primitive wrapper objects.
 *
 * @param {Object} obj The object to inspect.
 * @param {string|symbol} key The property name or symbol to check.
 * @returns {boolean} Returns `true` if the property exists, `false` otherwise.
 * @example
 *
 * objectHasProperty({ a: 1 }, 'a');
 * // => true
 *
 * objectHasProperty({ a: 1 }, 'b');
 * // => false
 *
 * objectHasProperty(Object.create({ a: 1 }), 'a');
 * // => true
 *
 * objectHasProperty(null, 'a');
 * // => false
 *
 * objectHasProperty('hello', 'length');
 * // => true
 */
function objectHasProperty(obj, key) {
  if (obj === null || obj === undefined) {
    return false;
  }
  // Coerce primitive values into their object wrappers to use 'in' operator
  const targetObj = (typeof obj !== 'object' && typeof obj !== 'function') ? Object(obj) : obj;
  return key in targetObj;
}

module.exports = objectHasProperty;