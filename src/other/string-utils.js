/**
 * Truncates a string to a specified length.
 * @param {string} str The string to truncate.
 * @param {number} num The length to truncate to.
 * @returns {string} The truncated string.
 */
const truncate = (str, num) => {
  if (str.length <= num) return str;
  return str.slice(0, num - 3 < 0 ? 0 : num - 3) + '...';
}

/**
 * Converts a string into a URL-friendly slug.
 * @param {string} str The string to slugify.
 * @returns {string} The slugified string.
 */
const slugify = (str) => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

module.exports = { truncate, slugify };