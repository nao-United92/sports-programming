/**
 * Masks a portion of a string with a given character.
 * @param {string} str The input string.
 * @param {string} maskChar The character to use for masking.
 * @param {number} unmaskedLength The number of characters to leave unmasked from the end.
 * @returns {string} The masked string.
 */
const mask = (str, maskChar = '*', unmaskedLength = 4) => {
  if (str.length <= unmaskedLength) {
    return str;
  }
  const maskedPart = str.slice(0, -unmaskedLength).replace(/./g, maskChar);
  const unmaskedPart = str.slice(-unmaskedLength);
  return maskedPart + unmaskedPart;
};

/**
 * Converts a camelCase string to snake_case.
 * @param {string} str The input string.
 * @returns {string} The snake_cased string.
 */
const toSnakeCase = (str) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

/**
 * Converts a snake_case string to camelCase.
 * @param {string} str The input string.
 * @returns {string} The camelCased string.
 */
const toCamelCase = (str) =>
  str.replace(/_([a-z])/g, (g) => g[1].toUpperCase());

module.exports = { mask, toSnakeCase, toCamelCase };