/**
 * Unescapes HTML entities in a string.
 *
 * @param {string} str - The string to unescape.
 * @returns {string} The unescaped string.
 */
export const unescapeHtml = (str) => {
  const map = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  };
  return str.replace(/&(amp|lt|gt|quot|#39);/g, (m) => map[m]);
};
