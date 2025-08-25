/**
 * Checks if `value` is a plain object, created by either `{}`, `new Object()`, or `Object.create(null)`.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 */
export const isObject = (value) => {
  if (value === null || typeof value !== 'object') {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
};

/**
 * Checks if `value` is classified as a `Function` object.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 */
export const isFunction = (value) => typeof value === 'function';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 */
export const isString = (value) => typeof value === 'string';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 * This method does not count `NaN` and `Infinity` as numbers.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 */
export const isNumber = (value) => typeof value === 'number' && isFinite(value);

/**
 * Checks if `value` is classified as an `Array` object.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 */
export const isArray = (value) => Array.isArray(value);

/**
 * Checks if `value` is `null`.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 */
export const isNull = (value) => value === null;

/**
 * Checks if `value` is `undefined`.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 */
export const isUndefined = (value) => typeof value === 'undefined';
