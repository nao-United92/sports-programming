/**
 * Converts a string to PascalCase (Variation 2).
 * @param {string} str
 * @returns {string}
 */
export const toPascalCaseV2 = (str) => {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+|[A-Z]|[0-9]+/g)
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
    .join('');
};
