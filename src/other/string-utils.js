/**
 * Converts the first character of `string` to upper case and the remaining
 * to lower case.
 *
 * @param {string} [string=''] The string to capitalize.
 * @returns {string} Returns the capitalized string.
 */
export function capitalize(string) {
  if (typeof string !== 'string' || string.length === 0) {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

/**
 * Converts `string` to camel case.
 *
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 */
export function camelCase(string) {
  if (typeof string !== 'string' || string.length === 0) {
    return '';
  }
  return string.replace(/[^a-zA-Z0-9]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '').replace(/^./, (match) => match.toLowerCase());
}