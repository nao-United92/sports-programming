/**
 * Converts a string to title case, but keeps specified minor words lowercase.
 * 
 * @param {string} str 
 * @param {string[]} [exceptions=['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'from', 'by']] 
 * @returns {string}
 */
const toTitleCaseSpecial = (str, exceptions = ['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'from', 'by', 'of']) => {
  if (!str) return '';
  return str
    .toLowerCase()
    .split(' ')
    .map((word, index) => {
      if (index > 0 && exceptions.includes(word)) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

module.exports = toTitleCaseSpecial;
