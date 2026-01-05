/**
 * Strips HTML tags from a string.
 *
 * @param {string} str The string to strip HTML tags from.
 * @returns {string} The string with HTML tags removed.
 */
const stripHtml = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string for the first argument.');
  }
  // Use a regular expression to match HTML tags and replace them with an empty string
  return str.replace(/<[^>]*>/g, '');
};

export default stripHtml;
