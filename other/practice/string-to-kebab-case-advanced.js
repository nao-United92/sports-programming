/**
 * Converts any string to kebab-case, with improved handling for acronyms and mixed separators.
 * 
 * @param {string} str 
 * @returns {string}
 */
const toKebabCaseAdvanced = (str) => {
  if (!str) return '';
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .toLowerCase()
    .replace(/^-+|-+$/g, '');
};

module.exports = toKebabCaseAdvanced;
