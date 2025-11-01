
/**
 * Truncates a string to a maximum length, including the suffix.
 *
 * @param {string} str The string to truncate.
 * @param {number} maxLength The maximum length of the output string.
 * @param {string} [suffix='...'] The suffix to append if truncation occurs.
 * @returns {string} The truncated string.
 */
export const truncate = (str, maxLength, suffix = '...') => {
  if (str.length <= maxLength) {
    return str;
  }

  if (maxLength <= suffix.length) {
    return suffix.slice(0, maxLength);
  }

  return str.slice(0, maxLength - suffix.length) + suffix;
};

/**
 * Repeats a string a specified number of times.
 *
 * @param {string} str The string to repeat.
 * @param {number} times The number of times to repeat the string.
 * @returns {string} The repeated string.
 */
export const repeat = (str, times) => {
  return str.repeat(times);
};
