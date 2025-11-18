/**
 * Truncates a string to a specified length, appending an omission string if truncated.
 *
 * @param {string} str The string to truncate.
 * @param {number} length The maximum length of the string.
 * @param {string} [omission='...'] The string to append to the truncated string.
 * @returns {string} Returns the truncated string.
 */
export const truncate = (str, length, omission = '...') => {
  if (typeof str !== 'string') {
    return '';
  }
  if (str.length <= length) {
    return str;
  }
  if (length <= omission.length) {
    return omission.slice(0, length);
  }
  return str.slice(0, length - omission.length) + omission;
};

/**
 * Truncates a string in the middle to a specified length.
 *
 * @param {string} str The string to truncate.
 * @param {number} length The maximum length of the string.
 * @param {string} [omission='...'] The string to insert in the middle of the truncated string.
 * @returns {string} Returns the middle-truncated string.
 */
export const truncateMiddle = (str, length, omission = '...') => {
  if (typeof str !== 'string') {
    return '';
  }
  if (str.length <= length) {
    return str;
  }

  const omissionLength = omission.length;
  if (length <= omissionLength) {
    return omission.slice(0, length);
  }

  const charsToShow = length - omissionLength;
  const startLength = Math.ceil(charsToShow / 2);
  const endLength = Math.floor(charsToShow / 2);

  return str.slice(0, startLength) + omission + str.slice(str.length - endLength);
};
