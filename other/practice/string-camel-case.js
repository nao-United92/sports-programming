/**
 * Converts a string to camelCase.
 *
 * @param {string} str - The string to convert.
 * @returns {string} The camelCased string.
 */
export const camelCase = (str) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
};
