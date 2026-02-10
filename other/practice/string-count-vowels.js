/**
 * Counts the number of vowels (a, e, i, o, u) in a string, case-insensitive.
 *
 * @param {string} str The string to analyze.
 * @returns {number} The count of vowels in the string.
 */
const stringCountVowels = (str) => {
  const matches = str.toLowerCase().match(/[aeiou]/g);
  return matches ? matches.length : 0;
};

export default stringCountVowels;
