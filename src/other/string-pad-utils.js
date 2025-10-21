/**
 * Pads a string on the left side to a certain length with a specified character.
 *
 * @param {string} str The string to pad.
 * @param {number} length The target length.
 * @param {string} [char=' '] The character to pad with.
 * @returns {string} The padded string.
 */
const padLeft = (str, length, char = ' ') => {
  return str.padStart(length, char);
};

/**
 * Pads a string on the right side to a certain length with a specified character.
 *
 * @param {string} str The string to pad.
 * @param {number} length The target length.
 * @param {string} [char=' '] The character to pad with.
 * @returns {string} The padded string.
 */
const padRight = (str, length, char = ' ') => {
  return str.padEnd(length, char);
};

module.exports = {
  padLeft,
  padRight,
};