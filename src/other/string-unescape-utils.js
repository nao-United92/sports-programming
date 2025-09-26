/**
 * The inverse of `escape`; this method converts the HTML entities
 * `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to
 * their corresponding characters.
 *
 * @param {string} [string=''] The string to unescape.
 * @returns {string} Returns the unescaped string.
 */
function unescape(string) {
  if (typeof string !== 'string' || string.length === 0) {
    return '';
  }
  const htmlUnescapes = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': ''',
    '&#96;': '`',
  };
  return string.replace(/&(amp|lt|gt|quot|#39|#96);/g, (entity) => htmlUnescapes[entity]);
}

module.exports = { unescape };
