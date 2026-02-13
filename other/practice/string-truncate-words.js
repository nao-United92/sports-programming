/**
 * Truncates a string to a specified number of words.
 *
 * @param {string} str The string to truncate.
 * @param {number} numWords The maximum number of words to keep.
 * @param {string} [appendix='...'] The string to append if truncation occurs.
 * @returns {string} The truncated string.
 */
const truncateWords = (str, numWords, appendix = '...') => {
  if (!str) {
    return '';
  }

  const words = str.trim().split(/\s+/);
  if (words.length <= numWords) {
    return words.join(' ');
  }

  const truncatedWords = words.slice(0, numWords);
  return truncatedWords.join(' ') + appendix;
};

export default truncateWords;