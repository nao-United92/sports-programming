/**
 * Reverses the order of lines in a multiline string.
 * 
 * @param {string} str 
 * @returns {string}
 */
const reverseLines = (str) => {
  if (!str) return '';
  return str.split(/\r?\n/).reverse().join('\n');
};

module.exports = reverseLines;
