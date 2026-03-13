/**
 * Wraps a string at a given width, breaking at spaces when possible.
 *
 * @param {string} str 
 * @param {number} width 
 * @returns {string}
 */
const wrapAt = (str, width) => {
  if (!str || width <= 0) return str;
  const words = str.split(' ');
  let currentLineLength = 0;
  return words.reduce((acc, word) => {
    if (currentLineLength + word.length + (currentLineLength > 0 ? 1 : 0) <= width) {
      acc += (currentLineLength > 0 ? ' ' : '') + word;
      currentLineLength += word.length + (currentLineLength > 0 ? 1 : 0);
    } else {
      acc += '\n' + word;
      currentLineLength = word.length;
    }
    return acc;
  }, '');
};

module.exports = wrapAt;
