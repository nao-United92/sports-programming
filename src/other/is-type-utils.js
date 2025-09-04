/**
 * Checks if `value` is classified as a `Number` primitive or object.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 */
export function isNumber(value) {
  return typeof value === 'number' || (typeof value === 'object' && value !== null && Object.prototype.toString.call(value) === '[object Number]');
}

/**
 * Checks if `value` is classified as a `String` primitive or object.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 */
export function isString(value) {
  return typeof value === 'string' || (typeof value === 'object' && value !== null && Object.prototype.toString.call(value) === '[object String]');
}

/**
 * Checks if `value` is classified as a boolean primitive or object.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
 */
export function isBoolean(value) {
  return value === true || value === false || (typeof value === 'object' && value !== null && Object.prototype.toString.call(value) === '[object Boolean]');
}

/**
 * Checks if `value` is classified as a `Function` object.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 */
export function isFunction(value) {
  // The use of `Object.prototype.toString` avoids issues with functions created using `new Function()`.
  return Object.prototype.toString.call(value) === '[object Function]';
}

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string properties.
 * Array-like values such as `arguments` objects, arrays, and strings are
 * considered empty if they have a `length` of `0`. Similarly, maps and sets
 * are considered empty if they have a `size` of `0`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
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
  // Check for plain objects
  if (Object.prototype.toString.call(value) === '[object Object]') {
    return Object.keys(value).length === 0;
  }
  // For other types like numbers, booleans, non-plain objects, consider them "not empty".
  return false;
}