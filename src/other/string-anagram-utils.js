
/**
 * Checks if two strings are anagrams of each other.
 * Anagrams are words or phrases formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * @param {string} str1 The first string.
 * @param {string} str2 The second string.
 * @returns {boolean} True if the strings are anagrams, false otherwise.
 */
export const isAnagram = (str1, str2) => {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    return false;
  }

  const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');

  return normalize(str1) === normalize(str2);
};
