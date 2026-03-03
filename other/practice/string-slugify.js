/**
 * Converts a string into a URL-friendly slug.
 * @param {string} str
 * @returns {string} The slugified string.
 */
const slugify = (str) => {
  if (typeof str !== 'string') return str;
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

module.exports = slugify;
