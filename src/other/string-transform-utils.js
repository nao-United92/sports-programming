/**
 * Converts the first character of `string` to upper case and the remaining to lower case.
 *
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 */
const capitalize = (string) => {
  if (typeof string !== 'string' || string.length === 0) {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

/**
 * Converts `string` to kebab case.
 *
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the kebab cased string.
 */
const kebabCase = (string) => {
  if (typeof string !== 'string' || string.length === 0) {
    return '';
  }
  return string
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // fooBar -> foo-Bar
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2') // XMLHttpRequest -> XML-HttpRequest
    .replace(/[\s_]+/g, '-') // spaces and underscores to hyphens
    .toLowerCase()
    .replace(/^-+|-+$/g, ''); // remove leading/trailing hyphens
};

module.exports = { capitalize, kebabCase };
