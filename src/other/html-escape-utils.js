const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

const unescapedHtml = Object.fromEntries(Object.entries(htmlEscapes).map(([key, value]) => [value, key]));

const reUnescapedHtml = new RegExp(`[${Object.keys(htmlEscapes).join('')}]`, 'g');
const reEscapedHtml = new RegExp(`(${Object.keys(unescapedHtml).join('|')})`, 'g');

/**
 * Escapes characters in a string for safe use in HTML.
 * @param {string} str The string to escape.
 * @returns {string} Returns the escaped string.
 */
export const escape = (str) => {
  return str ? str.replace(reUnescapedHtml, (match) => htmlEscapes[match]) : '';
};

/**
 * The inverse of `escape`, this method converts HTML entities back to their original characters.
 * @param {string} str The string to unescape.
 * @returns {string} Returns the unescaped string.
 */
export const unescape = (str) => {
  return str ? str.replace(reEscapedHtml, (match) => unescapedHtml[match]) : '';
};
