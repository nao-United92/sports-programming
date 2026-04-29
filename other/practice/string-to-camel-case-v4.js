/**
 * Converts a string to camelCase (Variation 4).
 * @param {string} str
 * @returns {string}
 */
export const toCamelCaseV4 = (str) => {
  const s = str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase());
  if (s.length === 0) return '';
  return s[0] + s.slice(1).map((x) => x.charAt(0).toUpperCase() + x.slice(1)).join('');
};
