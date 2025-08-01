
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
