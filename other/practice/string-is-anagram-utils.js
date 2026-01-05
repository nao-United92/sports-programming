/**
 * Checks if two strings are anagrams of each other (contain the same characters in a different order, ignoring case and non-alphanumeric characters).
 *
 * @param {string} str1 The first string.
 * @param {string} str2 The second string.
 * @returns {boolean} Returns `true` if the strings are anagrams, `false` otherwise.
 */
const isAnagram = (str1, str2) => {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw new TypeError('Expected both arguments to be strings.');
  }

  const cleanString = (str) =>
    str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');

  return cleanString(str1) === cleanString(str2);
};

export default isAnagram;
