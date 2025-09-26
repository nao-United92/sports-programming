/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars] The characters to trim.
 * @returns {string} Returns the trimmed string.
 */
function trim(string, chars) {
  if (typeof string !== 'string' || string.length === 0) {
    return '';
  }
  if (chars === undefined) {
    return string.trim();
  }
  const pattern = new RegExp(`^[${chars}]+|[${chars}]+$`, 'g');
  return string.replace(pattern, '');
}

module.exports = { trim };