// src/other/string-manipulation.js

/**
 * Capitalizes the first letter of a given string.
 *
 * @param {string} str The input string.
 * @returns {string} The string with its first letter capitalized.
 */
export function capitalizeFirstLetter(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}
