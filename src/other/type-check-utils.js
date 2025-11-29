// src/other/type-check-utils.js

/**
 * Checks if a value is a plain object (e.g., {} or new Object()).
 *
 * @param {any} value The value to check.
 * @returns {boolean} True if the value is a plain object, false otherwise.
 */
const isObject = (value) => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
};

module.exports = {
  isObject,
};
