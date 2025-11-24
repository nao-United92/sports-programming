// src/other/string-utils.js

/**
 * Capitalizes the first letter of a string.
 * @param {string} str The input string.
 * @returns {string} The string with the first letter capitalized, or an empty string if the input is not a string.
 */
export function capitalize(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
