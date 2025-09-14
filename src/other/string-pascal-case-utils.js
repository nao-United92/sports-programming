/**
 * Converts a string to PascalCase.
 *
 * @param {string} str The string to convert.
 * @returns {string} Returns the PascalCased string.
 */
const pascalCase = (str) => {
  if (typeof str !== 'string') {
    return '';
  }
  return str
    .replace(/[-_\s]+(.)?/g, (match, chr) => (chr ? chr.toUpperCase() : ''))
    .replace(/^(.)/, (match) => match.toUpperCase());
};

export { pascalCase };
