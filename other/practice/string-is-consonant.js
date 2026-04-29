/**
 * Returns true if the character is a consonant.
 * @param {string} char
 * @returns {boolean}
 */
export const isConsonant = (char) => {
  if (typeof char !== 'string' || char.length !== 1) return false;
  return /^[b-df-hj-np-tv-z]$/i.test(char);
};
