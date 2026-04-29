/**
 * Returns true if the character is a vowel.
 * @param {string} char
 * @returns {boolean}
 */
export const isVowel = (char) => {
  if (typeof char !== 'string' || char.length !== 1) return false;
  return /^[aeiou]$/i.test(char);
};
