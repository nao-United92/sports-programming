/**
 * Encrypts a string using Caesar cipher.
 * @param {string} str - The string to encrypt.
 * @param {number} shift - The number of positions to shift.
 * @returns {string} The encrypted string.
 */
function stringCaesarCipher(str, shift) {
  return str.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      const code = char.charCodeAt(0);
      const isUpperCase = code >= 65 && code <= 90;
      const base = isUpperCase ? 65 : 97;
      return String.fromCharCode(((code - base + shift) % 26 + 26) % 26 + base);
    }
    return char;
  }).join('');
}

module.exports = stringCaesarCipher;
