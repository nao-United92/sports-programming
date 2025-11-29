// src/other/object-utility-functions.js

/**
 * Checks if a value is empty.
 * Considers null, undefined, empty strings, empty arrays, and empty objects as empty.
 *
 * @param {any} value The value to check.
 * @returns {boolean} True if the value is empty, false otherwise.
 */
const isEmpty = (value) => {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  return false;
};

module.exports = {
  isEmpty,
};
