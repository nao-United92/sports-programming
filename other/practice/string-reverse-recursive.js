/**
 * Reverses a string using recursion.
 * 
 * @param {string} str - The string to reverse.
 * @returns {string} - The reversed string.
 */
function stringReverseRecursive(str) {
  if (str === "") {
    return "";
  }
  return stringReverseRecursive(str.substr(1)) + str.charAt(0);
}

module.exports = stringReverseRecursive;
