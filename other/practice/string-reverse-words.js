/**
 * Reverses the order of words in a string.
 * Words are separated by spaces.
 *
 * @param {string} str The string to process.
 * @returns {string} The string with words reversed.
 */
const stringReverseWords = (str) => {
  return str.split(' ').reverse().join(' ');
};

export default stringReverseWords;
