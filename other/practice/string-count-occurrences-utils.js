/**
 * Counts the number of occurrences of a substring within a string.
 *
 * @param {string} str The main string.
 * @param {string} subStr The substring to search for.
 * @returns {number} The number of times the substring appears in the string.
 */
const countOccurrences = (str, subStr) => {
  if (typeof str !== 'string' || typeof subStr !== 'string') {
    throw new TypeError('Expected both arguments to be strings.');
  }
  if (subStr.length === 0) {
    return str.length + 1; // Or some other defined behavior for empty substring
  }

  let count = 0;
  let position = str.indexOf(subStr);
  while (position !== -1) {
    count++;
    position = str.indexOf(subStr, position + subStr.length);
  }
  return count;
};

export default countOccurrences;
