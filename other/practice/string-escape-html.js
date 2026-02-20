/**
 * Escapes characters in a string for use in HTML.
 *
 * @param {string} str - The string to escape.
 * @returns {string} The escaped string.
 */
export const escapeHtml = (str) => {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return str.replace(/[&<>"']/g, (m) => map[m]);
};
