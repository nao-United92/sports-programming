/**
 * Pads `string` on the left side if it's shorter than `length`. Padding
 * characters are truncated if they exceed `length`.
 *
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 */
export const padLeft = (string, length, chars = ' ') => {
  const str = string == null ? '' : String(string);
  const len = length == null ? 0 : +length;
  if (len <= str.length) {
    return str;
  }
  const pad = String(chars);
  const padLen = len - str.length;
  return pad.repeat(Math.ceil(padLen / pad.length)).slice(0, padLen) + str;
};

/**
 * Pads `string` on the right side if it's shorter than `length`. Padding
 * characters are truncated if they exceed `length`.
 *
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 */
export const padRight = (string, length, chars = ' ') => {
  const str = string == null ? '' : String(string);
  const len = length == null ? 0 : +length;
  if (len <= str.length) {
    return str;
  }
  const pad = String(chars);
  const padLen = len - str.length;
  return str + pad.repeat(Math.ceil(padLen / pad.length)).slice(0, padLen);
};