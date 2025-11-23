/**
 * Returns every nth element in an array.
 *
 * @param {Array} array The array to query.
 * @param {number} nth The number representing the nth element.
 * @returns {Array} Returns the new array of every nth element.
 */
export const everyNth = (array, nth) => {
  if (!Array.isArray(array) || nth <= 0) {
    return [];
  }
  return array.filter((_, i) => (i + 1) % nth === 0);
};
