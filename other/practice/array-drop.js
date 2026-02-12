/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @param {Array} arr The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @returns {Array} Returns the new slice of `array`.
 */
function drop(arr, n = 1) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.slice(n < 0 ? 0 : n);
}

export { drop };
