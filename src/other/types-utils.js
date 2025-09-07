/**
 * Checks if a value is a string.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a string, false otherwise.
 */
export const isString = (value) => {
  return typeof value === 'string';
};

/**
 * Checks if a value is a boolean.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is a boolean, false otherwise.
 */
export const isBoolean = (value) => {
  return typeof value === 'boolean';
};

/**
 * Checks if a value is an object.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is an object, false otherwise.
 */
export const isObject = (value) => {
  return value != null && typeof value === 'object' && !Array.isArray(value);
};
