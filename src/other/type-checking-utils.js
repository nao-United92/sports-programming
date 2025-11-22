/**
 * Checks if a value is a plain object.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a plain object, false otherwise.
 */
export const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);

/**
 * Checks if a value is a string.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a string, false otherwise.
 */
export const isString = (value) => typeof value === 'string';

/**
 * Checks if a value is a number.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a number, false otherwise.
 */
export const isNumber = (value) => typeof value === 'number' && !isNaN(value);

/**
 * Checks if a value is a function.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a function, false otherwise.
 */
export const isFunction = (value) => typeof value === 'function';

/**
 * Checks if a value is a Date object.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a Date object, false otherwise.
 */
export const isDate = (value) => value instanceof Date;

/**
 * Checks if a value is a RegExp object.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a RegExp object, false otherwise.
 */
export const isRegExp = (value) => value instanceof RegExp;

/**
 * Checks if a value is a plain object (created by the Object constructor or has a null prototype).
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a plain object, false otherwise.
 */
export const isPlainObject = (value) => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
};



