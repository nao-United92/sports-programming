/**
 * Converts `string` to start case.
 *
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 */
function startCase(string) {
  if (typeof string !== 'string' || string.length === 0) {
    return '';
  }
  return string
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

module.exports = { startCase };
