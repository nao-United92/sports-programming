/**
 * Converts `string` to kebab case.
 *
 * @param {string} str The string to convert.
 * @returns {string} Returns the kebab cased string.
 */
function kebabCase(str) {
  if (typeof str !== 'string') {
    return '';
  }
  return str
    .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2') // Add hyphen between lower/upper case
    .replace(/[^a-zA-Z0-9]+/g, '-') // Replace non-alphanumeric with hyphen
    .toLowerCase() // Convert to lower case
    .replace(/^-+|-+$/g, ''); // Trim leading/trailing hyphens
}

module.exports = kebabCase;