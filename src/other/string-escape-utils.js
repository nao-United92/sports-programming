/**
 * Converts the characters `&`, `<`, `>`, `"`, `'`, and `` ` `` in `string` to
 * their corresponding HTML entities.
 *
 * @param {string} [string=''] The string to escape.
 * @returns {string} Returns the escaped string.
 */
function escape(string) {
  if (typeof string !== 'string' || string.length === 0) {
    return '';
  }
  const htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    ''': '&#39;',
    '`': '&#96;',
  };
  return string.replace(/[&<>"'`]/g, (chr) => htmlEscapes[chr]);
}

module.exports = { escape };
