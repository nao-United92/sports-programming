/**
 * Converts any string to snake_case, with improved handling for acronyms and mixed separators.
 * 
 * @param {string} str 
 * @returns {string}
 */
const toSnakeCaseAdvanced = (str) => {
  if (!str) return '';
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1_$2')
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .toLowerCase()
    .replace(/^_+|_+$/g, '');
};

module.exports = toSnakeCaseAdvanced;
