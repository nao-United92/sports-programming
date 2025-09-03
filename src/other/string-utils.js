
/**
 * Truncates a string to a specified length and appends a suffix.
 * @param {string} str The string to truncate.
 * @param {number} num The length to truncate to.
 * @param {string} [suffix='...'] The suffix to append.
 * @returns {string} The truncated string.
 */
export function truncate(str, num, suffix = '...') {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + suffix;
}

/**
 * Converts a string to a slug.
 * @param {string} str The string to slugify.
 * @returns {string} The slugified string.
 */
export function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}
