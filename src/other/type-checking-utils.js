/**
 * Checks if a value is an object.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is an object, false otherwise.
 */
export const isObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);

/**
 * Checks if a value is a function.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a function, false otherwise.
 */
export const isFunction = (value) => typeof value === 'function';

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
 * Checks if a value is a boolean.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a boolean, false otherwise.
 */
export const isBoolean = (value) => typeof value === 'boolean';

/**
 * Checks if a value is an array.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is an array, false otherwise.
 */
export const isArray = (value) => Array.isArray(value);

/**
 * Checks if a value is null.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is null, false otherwise.
 */
export const isNull = (value) => value === null;

/**
 * Checks if a value is undefined.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is undefined, false otherwise.
 */
export const isUndefined = (value) => typeof value === 'undefined';

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