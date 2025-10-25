/**
 * Checks if a value is a plain object.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a plain object, false otherwise.
 */
const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);

/**
 * Checks if a value is a string.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a string, false otherwise.
 */
const isString = (value) => typeof value === 'string';

/**
 * Checks if a value is a number.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a number, false otherwise.
 */
const isNumber = (value) => typeof value === 'number' && !isNaN(value);

/**
 * Checks if a value is a function.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a function, false otherwise.
 */
const isFunction = (value) => typeof value === 'function';

/**
 * Checks if a value is a Date object.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a Date object, false otherwise.
 */
const isDate = (value) => value instanceof Date;

/**
 * Checks if a value is a RegExp object.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a RegExp object, false otherwise.
 */
const isRegExp = (value) => value instanceof RegExp;


module.exports = { isObject, isString, isNumber, isFunction, isDate, isRegExp };