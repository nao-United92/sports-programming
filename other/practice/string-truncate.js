/**
 * Truncates a string to a specified length and adds an ellipsis.
 * 
 * @param {string} str - The string to truncate.
 * @param {number} length - The maximum length of the string including ellipsis.
 * @param {string} [ending='...'] - The string to append to the end.
 * @returns {string} The truncated string.
 */
function truncate(str, length, ending = '...') {
  if (str.length <= length) {
    return str;
  }
  return str.slice(0, length - ending.length) + ending;
}

module.exports = truncate;
