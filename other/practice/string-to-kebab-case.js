/**
 * Converts a string to kebab-case.
 *
 * @param {string} str The string to convert.
 * @returns {string} The string in kebab-case.
 */
const stringToKebabCase = (str) => {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
    .replace(/^-/, ''); // Remove leading hyphen if any
};

export default stringToKebabCase;
