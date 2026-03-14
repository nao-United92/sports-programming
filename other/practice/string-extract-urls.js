/**
 * Extracts all URLs from a given string.
 *
 * @param {string} str 
 * @returns {string[]}
 */
const extractUrls = (str) => {
  const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*/gi;
  return str.match(urlRegex) || [];
};

module.exports = extractUrls;
