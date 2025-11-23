/**
 * Creates a slice of `array` with `n` elements dropped from the end.
 *
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @returns {Array} Returns the new slice of `array`.
 */
export const dropRight = (array, n = 1) => {
  if (!Array.isArray(array)) {
    return [];
  }
  const length = array.length;
  return length > n ? array.slice(0, length - n) : [];
};
