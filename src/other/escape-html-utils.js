/**
 * A map of characters to their HTML-escaped equivalents.
 * @type {Object<string, string>}
 */
const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

/**
 * Used to match HTML entities and HTML characters.
 * @type {RegExp}
 */
const reUnescapedHtml = /["&'<>]/g;

/**
 * Converts the characters "&", "<", ">", '" ', and "'" in `string` to their
 * corresponding HTML entities.
 *
 * @param {string} string The string to escape.
 * @returns {string} Returns the escaped string.
 */
function escapeHTML(string) {
  if (string == null) {
    return '';
  }
  return string.replace(reUnescapedHtml, (char) => htmlEscapes[char]);
}

export default escapeHTML;
