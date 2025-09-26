/**
 * Converts `string` to PascalCase.
 *
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the Pascal cased string.
 */
function pascalCase(string) {
  if (typeof string !== 'string' || string.length === 0) {
    return '';
  }
  return string
    .replace(/[^a-zA-Z0-9]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '')
    .replace(/^./, (match) => match.toUpperCase());
}

module.exports = { pascalCase };