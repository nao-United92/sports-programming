/**
 * Counts the occurrences of a value in an array.
 *
 * @param {Array<any>} arr The array to inspect.
 * @param {any} value The value to count.
 * @returns {number} Returns the number of occurrences.
 */
function countOccurrences(arr, value) {
  if (!Array.isArray(arr)) {
    return 0;
  }
  return arr.filter(item => item === value).length;
}

module.exports = countOccurrences;
