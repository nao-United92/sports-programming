/**
 * Capitalizes the first letter of every word in a string.
 * @param {string} str - The string to capitalize.
 * @returns {string} - The capitalized string.
 */
function capitalizeWords(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/\b[a-z]/g, (char) => char.toUpperCase());
}

module.exports = capitalizeWords;
