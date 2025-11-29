// src/other/string-utility-advanced-2.js

/**
 * Converts a string to kebab-case.
 *
 * @param {string} str The input string.
 * @returns {string} The kebab-cased string.
 */
const kebabCase = (str) => {
  if (typeof str !== 'string') {
    return '';
  }
  return str
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2') // Add hyphen before uppercase letters
    .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
    .toLowerCase(); // Convert to lowercase
};

module.exports = {
  kebabCase,
};
