/**
 * Truncates a string to a specified length, appending a suffix if truncated.
 * @param {string} str The string to truncate.
 * @param {number} length The maximum length of the string.
 * @param {string} [suffix='...'] The suffix to append if the string is truncated.
 * @returns {string} The truncated string.
 */
export const truncate = (str, length, suffix = '...') => {
  if (str.length <= length) {
    return str;
  }
  return str.slice(0, length - suffix.length) + suffix;
};

/**
 * Escapes HTML special characters in a string.
 * @param {string} str The string to escape.
 * @returns {string} The escaped string.
 */
export const escapeHTML = (str) =>
  str.replace(
    /[&<>"']/g,
    (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m])
  );

/**
 * Unescapes HTML special characters in a string.
 * @param {string} str The string to unescape.
 * @returns {string} The unescaped string.
 */
export const unescapeHTML = (str) =>
  str.replace(
    /&amp;|&lt;|&gt;|&quot;|&#39;/g,
    (m) => ({ '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'" }[m])
  );