/**
 * Escapes HTML special characters in a string.
 *
 * @param {string} str The string to escape.
 * @returns {string} Returns the escaped string.
 */
export const escapeHTML = (str) => {
  if (typeof str !== 'string') return '';
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return str.replace(/[&<>"']/g, (m) => map[m]);
};

/**
 * Unescapes HTML special characters in a string.
 *
 * @param {string} str The string to unescape.
 * @returns {string} Returns the unescaped string.
 */
export const unescapeHTML = (str) => {
  if (typeof str !== 'string') return '';
  const map = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#039;': "'",
  };
  return str.replace(/&amp;|&lt;|&gt;|&quot;|&#039;/g, (m) => map[m]);
};