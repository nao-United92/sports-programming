
/**
 * Truncates a string to a specified length, appending a suffix.
 *
 * @param {string} str The string to truncate.
 * @param {number} num The desired maximum length of the string.
 * @param {string} [suffix='...'] The suffix to append if the string is truncated.
 * @returns {string} The truncated string.
 */
export const truncate = (str, num, suffix = '...') => {
  if (typeof str !== 'string' || typeof num !== 'number') {
    return '';
  }
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + suffix;
};

/**
 * Converts a string into a URL-friendly slug.
 *
 * @param {string} str The string to convert.
 * @returns {string} The slugified string.
 */
export const slugify = (str) => {
  if (typeof str !== 'string') {
    return '';
  }
  return str
    .toLowerCase()
    .trim()
    .replace(/[\s_-]+/g, '-')
    .replace(/[^\w-]+/g, '');
};
