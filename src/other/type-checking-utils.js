/**
 * Checks if a value is a string.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a string, false otherwise.
 */
export function isString(value) {
  return typeof value === 'string';
}

/**
 * Checks if a value is a number.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a number, false otherwise.
 */
export function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}

/**
 * Checks if a value is a boolean.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a boolean, false otherwise.
 */
export function isBoolean(value) {
  return typeof value === 'boolean';
}

/**
 * Checks if a value is a function.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a function, false otherwise.
 */
export function isFunction(value) {
  return typeof value === 'function';
}

/**
 * Checks if a value is an object (and not null or an array).
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is an object, false otherwise.
 */
export function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

/**
 * Checks if a value is an array.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is an array, false otherwise.
 */
export function isArray(value) {
  return Array.isArray(value);
}

/**
 * Checks if a value is null.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is null, false otherwise.
 */
export function isNull(value) {
  return value === null;
}

/**
 * Checks if a value is undefined.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is undefined, false otherwise.
 */
export function isUndefined(value) {
  return typeof value === 'undefined';
}

/**
 * Checks if a value is a plain object (i.e., an object created by the Object constructor or one with a null prototype).
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a plain object, false otherwise.
 */
export function isPlainObject(value) {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
}

/**
 * Checks if a value is an empty string, empty array, or empty object.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is empty, false otherwise.
 */
export function isEmpty(value) {
  if (value === null || typeof value === 'undefined') {
    return true;
  }
  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0;
  }
  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }
  return false;
}

/**
 * Checks if a value is a Promise.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a Promise, false otherwise.
 */
export function isPromise(value) {
  return value instanceof Promise || (value !== null && typeof value === 'object' && typeof value.then === 'function' && typeof value.catch === 'function');
}

/**
 * Checks if a value is iterable.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is iterable, false otherwise.
 */
export function isIterable(value) {
  return value !== null && typeof value[Symbol.iterator] === 'function';
}

/**
 * Checks if a value is a Date object.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a Date object, false otherwise.
 */
export function isDate(value) {
  return value instanceof Date && !isNaN(value);
}
