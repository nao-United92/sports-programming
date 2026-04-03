/**
 * Checks if a string is a pangram (contains every letter of the alphabet).
 * Case-insensitive. Ignores non-letter characters.
 * 
 * @param {string} str - The string to check.
 * @returns {boolean} - True if the string is a pangram, false otherwise.
 */
function stringIsPangram(str) {
  if (typeof str !== 'string') return false;
  
  const letters = str.toLowerCase().replace(/[^a-z]/g, '');
  const uniqueLetters = new Set(letters);
  
  return uniqueLetters.size === 26;
}

module.exports = stringIsPangram;
