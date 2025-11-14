/**
 * Truncates a string to a specified length, appending a custom suffix.
 *
 * @param {string} str The string to truncate.
 * @param {number} length The maximum length of the string.
 * @param {string} [suffix='...'] The suffix to append if the string is truncated.
 * @returns {string} The truncated string.
 */
const truncate = (str, length, suffix = '...') => {
  if (str.length <= length) {
    return str;
  }
  return str.slice(0, length - suffix.length) + suffix;
};

/**
 * Masks a portion of a string with a given character.
 *
 * @param {string} str The input string.
 * @param {number} numVisibleStart The number of characters to leave visible at the start.
 * @param {number} numVisibleEnd The number of characters to leave visible at the end.
 * @param {string} [maskChar='*'] The character to use for masking.
 * @returns {string} The masked string.
 */
const mask = (str, numVisibleStart, numVisibleEnd, maskChar = '*') => {
  const totalVisible = numVisibleStart + numVisibleEnd;
  if (str.length <= totalVisible) {
    return str;
  }
  const start = str.slice(0, numVisibleStart);
  const end = str.slice(str.length - numVisibleEnd);
  const maskedPart = maskChar.repeat(str.length - totalVisible);
  return start + maskedPart + end;
};

/**
 * Counts the number of occurrences of a substring in a string.
 *
 * @param {string} str The main string.
 * @param {string} subStr The substring to count.
 * @returns {number} The number of occurrences.
 */
const countOccurrences = (str, subStr) => {
  if (subStr.length <= 0) {
    return 0;
  }
  let count = 0;
  let pos = str.indexOf(subStr);
  while (pos !== -1) {
    count++;
    pos = str.indexOf(subStr, pos + 1);
  }
  return count;
};

module.exports = {
  truncate,
  mask,
  countOccurrences,
};