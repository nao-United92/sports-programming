/**
 * Counts the occurrences of each character in a string.
 *
 * @param {string} str The input string.
 * @returns {Object<string, number>} An object where keys are characters and values are their counts.
 */
const stringCountChars = (str) => {
  const charCounts = {};
  for (const char of str) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }
  return charCounts;
};

export default stringCountChars;
