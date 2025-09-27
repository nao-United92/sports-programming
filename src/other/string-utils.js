/**
 * Truncates a string to a specified length, appending a suffix if truncated.
 * @param {string} str The string to truncate.
 * @param {number} length The maximum length of the string.
 * @param {string} [suffix='...'] The suffix to append if the string is truncated.
 * @returns {string} The truncated string.
 */
export const truncate = (str, length, suffix = '...') => {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  if (str.length <= length) {
    return str;
  }
  return str.slice(0, length - suffix.length) + suffix;
};

/**
 * Converts a string to a URL-friendly slug.
 * @param {string} str The string to convert.
 * @returns {string} The slugified string.
 */
export const slugify = (str) => {
  if (typeof str !== 'string' || str.length === 0) {
    return '';
  }
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};