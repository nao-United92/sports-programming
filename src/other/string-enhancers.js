
/**
 * Reverses a string.
 * @param {string} str - The string to reverse.
 * @returns {string} The reversed string.
 */
const reverseString = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string.');
  }
  return str.split('').reverse().join('');
};

/**
 * Converts a camelCase string to snake_case.
 * @param {string} str - The camelCase string to convert.
 * @returns {string} The converted snake_case string.
 */
const camelToSnake = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string.');
  }
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};

/**
 * Converts a snake_case string to camelCase.
 * @param {string} str - The snake_case string to convert.
 * @returns {string} The converted camelCase string.
 */
const snakeToCamel = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string.');
  }
  return str.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
};

module.exports = {
  reverseString,
  camelToSnake,
  snakeToCamel,
};
