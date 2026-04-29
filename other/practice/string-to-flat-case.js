/**
 * Converts a string to flatcase.
 * @param {string} str
 * @returns {string}
 */
export const toFlatCase = (str) => {
  if (!str) return '';
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+|[A-Z]|[0-9]+/g)
    .join('')
    .toLowerCase();
};
