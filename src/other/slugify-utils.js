/**
 * Converts a string into a URL-friendly slug.
 * @param {string} str The string to slugify.
 * @returns {string} The slugified string.
 */
export const slugify = (str) => {
  if (typeof str !== 'string') {
    return '';
  }

  str = str.trim().toLowerCase();

  // Remove accents, convert to basic Latin characters
  str = str.normalize('NFD').replace(/[̀-ͯ]/g, '');

  // Replace non-alphanumeric characters with hyphens
  str = str.replace(/[^a-z0-9 -]/g, '')
                   .replace(/\s+/g, '-') // Replace spaces with hyphens
                   .replace(/-+/g, '-'); // Replace multiple hyphens with a single hyphen

  return str;
};
