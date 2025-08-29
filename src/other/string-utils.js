/**
 * Truncates a string to a specified length, appending a suffix if truncated.
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
 * Converts a string into a URL-friendly slug.
 *
 * @param {string} str The string to convert.
 * @returns {string} The slugified string.
 */
const slugify = (str) => {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
};

module.exports = {
  truncate,
  slugify,
};
