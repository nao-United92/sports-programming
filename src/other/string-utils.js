/**
 * Truncates a string to a specified length, appending a suffix if truncated.
 * @param {string} str The string to truncate.
 * @param {number} length The maximum length of the string.
 * @param {string} [suffix='...'] The suffix to append if the string is truncated.
 * @returns {string} The truncated string.
 */
export function truncate(str, length, suffix = '...') {
  if (str.length <= length) {
    return str;
  }
  if (suffix.length > length) {
    return suffix.slice(0, length);
  }
  return str.slice(0, length - suffix.length) + suffix;
}

/**
 * Escapes HTML special characters in a string.
 * @param {string} str The string to escape.
 * @returns {string} The escaped string.
 */
export function escapeHTML(str) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return str.replace(/[&<>"']/g, (m) => map[m]);
}