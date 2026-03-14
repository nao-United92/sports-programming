/**
 * Counts the number of words in a string using a regular expression for delimiters.
 * 
 * @param {string} str 
 * @param {RegExp} [delimiter=/\s+/] 
 * @returns {number}
 */
const countWords = (str, delimiter = /\s+/) => {
  if (!str || str.trim() === '') return 0;
  return str.trim().split(delimiter).filter(Boolean).length;
};

module.exports = countWords;
