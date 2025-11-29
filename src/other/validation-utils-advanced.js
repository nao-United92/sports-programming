// src/other/validation-utils-advanced.js

/**
 * Checks if a string is a valid URL.
 *
 * @param {string} url The string to validate.
 * @returns {boolean} True if the string is a valid URL, false otherwise.
 */
const isURL = (url) => {
  if (typeof url !== 'string') {
    return false;
  }
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

module.exports = {
  isURL,
};
