/**
 * Creates an array of elements, repeating the given array a specified number of times.
 *
 * @param {Array} arr The array to repeat.
 * @param {number} [count=1] The number of times to repeat the array.
 * @returns {Array} Returns the new array of repeated elements.
 */
const repeat = (arr, count = 1) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  // Using Array.from and flat for a concise implementation.
  return Array.from({ length: count }, () => arr).flat();
};

module.exports = { repeat };
