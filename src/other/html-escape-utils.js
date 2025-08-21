const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

const unescapedHtml = Object.fromEntries(Object.entries(htmlEscapes).map(([key, value]) => [value, key]));

const reEscapedHtml = new RegExp(`[${Object.keys(htmlEscapes).join('')}]`, 'g');
const reUnescapedHtml = new RegExp(`(${Object.keys(unescapedHtml).join('|')})`, 'g');

/**
 * Converts the characters "&", "<", ">", '" ', and "'" in `string` to their corresponding HTML entities.
 *
 * @param {string} str The string to escape.
 * @returns {string} Returns the escaped string.
 */
export const escape = (str) => {
  return str && reEscapedHtml.test(str) ? str.replace(reEscapedHtml, (char) => htmlEscapes[char]) : str;
};

/**
 * The inverse of `escape`; this method converts the HTML entities
 * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to their corresponding characters.
 *
 * @param {string} str The string to unescape.
 * @returns {string} Returns the unescaped string.
 */
export const unescape = (str) => {
  return str && reUnescapedHtml.test(str) ? str.replace(reUnescapedHtml, (entity) => unescapedHtml[entity]) : str;
};
