/**
 * Checks if a string is an isogram (no repeating letters).
 * Case-insensitive. Ignores non-letter characters.
 * 
 * @param {string} str - The string to check.
 * @returns {boolean} - True if the string is an isogram, false otherwise.
 */
function stringIsIsogram(str) {
  if (typeof str !== 'string') return false;
  
  const letters = str.toLowerCase().replace(/[^a-z]/g, '');
  const seen = new Set();
  
  for (const char of letters) {
    if (seen.has(char)) {
      return false;
    }
    seen.add(char);
  }
  
  return true;
}

module.exports = stringIsIsogram;
