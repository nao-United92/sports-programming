/**
 * Pads a string on both sides to a specified length.
 *
 * @param {string} str The string to pad.
 * @param {number} length The target length.
 * @param {string} [char=' '] The character to pad with.
 * @returns {string} The padded string.
 */
export const pad = (str, length, char = ' ') => {
  const strLen = str.length;
  if (strLen >= length) {
    return str;
  }
  const padLen = length - strLen;
  const padLeft = Math.floor(padLen / 2);
  const padRight = Math.ceil(padLen / 2);
  return char.repeat(padLeft) + str + char.repeat(padRight);
};
