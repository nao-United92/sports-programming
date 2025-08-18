/**
 * Truncates a string if it's longer than the given maximum string length.
 * The last characters of the truncated string are replaced with the omission string which defaults to "...".
 *
 * @param {string} string The string to truncate.
 * @param {number} length The maximum string length.
 * @param {string} [omission='...'] The string to indicate text is omitted.
 * @returns {string} Returns the truncated string.
 */
export const truncate = (string, length, omission = '...') => {
  if (string.length <= length) {
    return string;
  }
  if (length <= omission.length) {
    return omission;
  }
  return string.slice(0, length - omission.length) + omission;
};

/**
 * Converts a string into a URL-friendly slug.
 *
 * @param {string} string The string to convert.
 * @returns {string} Returns the slug.
 */
export const slugify = (string) => {
  return string
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
};