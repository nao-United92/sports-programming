/**
 * Pads the left side of a string with a specified character to a certain length.
 * @param {string} str The string to pad.
 * @param {number} length The desired length of the string.
 * @param {string} [char=' '] The character to pad with.
 * @returns {string} The padded string.
 */
export function padLeft(str, length, char = ' ') {
  str = String(str);
  const strLen = str.length;
  if (strLen >= length) {
    return str;
  }
  const padLen = length - strLen;
  const padding = char.repeat(padLen);
  return padding.slice(0, padLen) + str;
}

/**
 * Pads the right side of a string with a specified character to a certain length.
 * @param {string} str The string to pad.
 * @param {number} length The desired length of the string.
 * @param {string} [char=' '] The character to pad with.
 * @returns {string} The padded string.
 */
export function padRight(str, length, char = ' ') {
  str = String(str);
  const strLen = str.length;
  if (strLen >= length) {
    return str;
  }
  const padLen = length - strLen;
  const padding = char.repeat(padLen);
  return str + padding.slice(0, padLen);
}
