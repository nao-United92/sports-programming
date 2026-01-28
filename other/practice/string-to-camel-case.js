/**
 * Converts a string to camelCase.
 * Handles snake_case, kebab-case, and space-separated strings.
 *
 * @param {string} str The string to convert.
 * @returns {string} The camelCased string.
 */
function toCamelCase(str) {
  if (typeof str !== 'string' || !str) {
    return '';
  }
  // Convert the whole string to lower case first
  const lowercasedStr = str.toLowerCase();
  
  // Replace snake_case and kebab_case with a space, then capitalize words
  return lowercasedStr
    .replace(/([-_\s])+(.)?/g, (match, separator, chr) => (chr ? chr.toUpperCase() : ''));
}

module.exports = {
  toCamelCase,
};
