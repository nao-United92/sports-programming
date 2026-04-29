/**
 * Converts a string to Sentence case.
 * @param {string} str
 * @returns {string}
 */
export const toSentenceCase = (str) => {
  if (!str) return '';
  const s = str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+|[A-Z]|[0-9]+/g)
    .join(' ')
    .toLowerCase();
  return s.charAt(0).toUpperCase() + s.slice(1);
};
