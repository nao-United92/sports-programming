/**
 * Encodes a string to Base64, correctly handling Unicode characters.
 * This implementation uses Node.js's Buffer API.
 * @param {string} str The string to encode.
 * @returns {string} The Base64-encoded string.
 */
function encode(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return Buffer.from(str, 'utf8').toString('base64');
}

/**
 * Decodes a Base64 string, correctly handling Unicode characters.
 * This implementation uses Node.js's Buffer API.
 * @param {string} base64Str The Base64 string to decode.
 * @returns {string} The decoded string.
 */
function decode(base64Str) {
  if (typeof base64Str !== 'string') {
    return '';
  }
  return Buffer.from(base64Str, 'base64').toString('utf8');
}

module.exports = {
  encode,
  decode,
};
