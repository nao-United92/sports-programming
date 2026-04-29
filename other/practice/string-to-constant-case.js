/**
 * Converts a string to CONSTANT_CASE.
 * @param {string} str
 * @returns {string}
 */
export const toConstantCase = (str) => {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+|[A-Z]|[0-9]+/g)
    .map((x) => x.toUpperCase())
    .join('_');
};
