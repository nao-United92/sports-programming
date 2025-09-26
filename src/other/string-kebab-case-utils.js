/**
 * Converts `string` to kebab case.
 *
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 */
function kebabCase(string) {
  if (typeof string !== 'string' || string.length === 0) {
    return '';
  }
  return string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[
_]+/g, '-')
    .toLowerCase();
}

module.exports = { kebabCase };