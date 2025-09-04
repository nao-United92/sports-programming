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
