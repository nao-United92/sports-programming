/**
 * Calculates the byte size of a string using the Blob API.
 * @param {string} str The string to calculate the size of.
 * @returns {number} The byte size of the string.
 */
const byteSize = (str) => new Blob([str]).size;

/**
 * Truncates a string to a specified length, appending '...' if truncated.
 * @param {string} str The string to truncate.
 * @param {number} num The maximum length of the resulting string.
 * @returns {string} The truncated string.
 */
const truncate = (str, num) => {
  if (typeof str !== 'string') {
    return str;
  }
  if (num <= 3) {
    return '...';
  }
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num - 3) + '...';
};

/**
 * Escapes special HTML characters in a string.
 * @param {string} str The string to escape.
 * @returns {string} The escaped string.
 */
const escapeHTML = (str) => {
    if (typeof str !== 'string') return str;
    return str.replace(
        /[&<>"']/g,
        (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m])
    );
};

/**
 * Unescapes escaped HTML characters in a string.
 * @param {string} str The string to unescape.
 * @returns {string} The unescaped string.
 */
const unescapeHTML = (str) => {
    if (typeof str !== 'string') return str;
    return str.replace(
        /&amp;|&lt;|&gt;|&quot;|&#39;/g,
        (m) => ({ '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'" }[m])
    );
};

module.exports = {
  byteSize,
  truncate,
  escapeHTML,
  unescapeHTML,
};