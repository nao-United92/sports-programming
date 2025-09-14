/**
 * Converts a string to camelCase.
 *
 * @param {string} str The string to convert.
 * @returns {string} Returns the camelCased string.
 */
const camelCase = (str) => {
  if (typeof str !== 'string') {
    return '';
  }
  return str
    .replace(/[-_\s]+(.)?/g, (match, chr) => (chr ? chr.toUpperCase() : ''))
    .replace(/^(.)/, (match) => match.toLowerCase());
};

export { camelCase };