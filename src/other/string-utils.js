/**
 * Truncates a string to a specified length, appending a suffix if needed.
 * @param {string} str The string to truncate.
 * @param {number} maxLength The maximum length of the string.
 * @param {string} [suffix='...'] The suffix to append if the string is truncated.
 * @returns {string} The truncated string.
 */
export const truncate = (str, maxLength, suffix = '...') => {
  if (str.length <= maxLength) {
    return str;
  }
  if (maxLength <= suffix.length) {
    return suffix;
  }
  return str.slice(0, maxLength - suffix.length) + suffix;
};

/**
 * Converts a string to camelCase.
 * @param {string} str The string to convert.
 * @returns {string} The camelCased string.
 */
export const toCamelCase = (str) => {
  return str.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
};
