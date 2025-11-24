/**
 * Converts a string to camelCase.
 * @param {string} str The string to convert.
 * @returns {string} The camelCased string.
 */
export function camelCase(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }

  return str.replace(/[^a-zA-Z0-9]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '').replace(/^./, (match) => match.toLowerCase());
}