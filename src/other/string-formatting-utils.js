/**
 * Escapes HTML special characters in a string.
 *
 * @param {string} str The string to escape.
 * @returns {string} The escaped string.
 */
export const escapeHTML = (str) => {
  if (str === null || str === undefined) {
    return '';
  }
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/\//g, '&#x2F;');
};

/**
 * Converts a string to title case.
 *
 * @param {string} str The string to convert.
 * @returns {string} The title cased string.
 */
export const toTitleCase = (str) => {
  if (str === null || str === undefined) {
    return '';
  }
  return String(str).replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
