/**
 * Converts a string to its binary representation.
 * @param {string} str
 * @returns {string}
 */
export const stringToBinary = (str) => {
  return str
    .split('')
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join(' ');
};
