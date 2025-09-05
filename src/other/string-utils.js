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

/**
 * Truncates a string if it's longer than the specified length.
 * The last characters of the truncated string are replaced with the omission string.
 * @param {string} str The string to truncate.
 * @param {number} length The maximum string length.
 * @param {string} [omission='...'] The string to indicate text is omitted.
 * @returns {string} The truncated string.
 */
export function truncate(str, length, omission = '...') {
  str = String(str);
  if (str.length <= length) {
    return str;
  }
  const end = length - omission.length;
  if (end < 1) {
    return omission.slice(0, length);
  }
  return str.slice(0, end) + omission;
}
