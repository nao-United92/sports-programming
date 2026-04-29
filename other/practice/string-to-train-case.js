/**
 * Converts a string to Train-Case.
 * @param {string} str
 * @returns {string}
 */
export const toTrainCase = (str) => {
  if (!str) return '';
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+|[A-Z]|[0-9]+/g)
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
    .join('-');
};
