/**
 * Converts a string to a slug (URL-friendly string).
 * @param {string} str - The string to slugify.
 * @returns {string} - The slugified string.
 */
function slugify(str) {
  if (typeof str !== 'string') return '';
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove non-word chars
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with a single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading and trailing hyphens
}

module.exports = slugify;
