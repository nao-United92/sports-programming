const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

const unescapeMap = Object.fromEntries(Object.entries(htmlEscapes).map(([key, val]) => [val, key]));

const reEscapedHtml = /[&<>"'']/g; // Escaped single quote
const reUnescapedHtml = /&(?:amp|lt|gt|quot|#39);/g;

/**
 * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
 * corresponding HTML entities.
 *
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 */
export const escape = (string) => {
  const str = string == null ? '' : String(string);
  return (str && reEscapedHtml.test(str))
    ? str.replace(reEscapedHtml, (char) => htmlEscapes[char])
    : str;
};

/**
 * The inverse of `escape`; this method converts the HTML entities
 * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to their
 * corresponding characters.
 *
 * @param {string} [string=''] The string to unescape.
 * @returns {string} Returns the unescaped string.
 */
export const unescape = (string) => {
  const str = string == null ? '' : String(string);
  return (str && reUnescapedHtml.test(str))
    ? str.replace(reUnescapedHtml, (entity) => unescapeMap[entity])
    : str;
};
