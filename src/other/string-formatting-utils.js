// src/other/string-formatting-utils.js

/**
 * Pads a string on the left side with a specified character until it reaches a desired length.
 *
 * @param {string | number} value The string or number to pad.
 * @param {number} length The desired length of the string.
 * @param {string} [padChar=' '] The character to use for padding.
 * @returns {string} The padded string.
 */
const padLeft = (value, length, padChar = ' ') => {
  let str = String(value);
  if (str.length >= length) {
    return str;
  }
  return str.padStart(length, padChar);
};

module.exports = {
  padLeft,
};