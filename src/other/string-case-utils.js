// src/other/string-case-utils.js

/**
 * Converts a string to camelCase.
 *
 * @param {string} str The string to convert.
 * @returns {string} The camelCased string.
 */
const toCamelCase = (str) => {
  if (typeof str !== 'string') {
    return '';
  }
  return str.replace(/[^a-zA-Z0-9]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '').replace(/^./, (match) => match.toLowerCase());
};

module.exports = {
  toCamelCase,
};