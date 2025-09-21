/**
 * Converts a string to camelCase.
 *
 * @param {string} str The string to convert.
 * @returns {string} The camelCased string.
 */
const toCamelCase = (str) => {
  if (str == null) {
    return '';
  }
  if (!/[-_\s]/.test(str)) {
    if (str.toUpperCase() === str) {
        return str.toLowerCase();
    }
    return str.charAt(0).toLowerCase() + str.slice(1);
  }
  const s = str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)?/g, (match, chr) => chr ? chr.toUpperCase() : '');
  return s.charAt(0).toLowerCase() + s.slice(1);
};

export { toCamelCase };