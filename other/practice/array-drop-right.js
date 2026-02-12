/**
 * Creates a slice of `array` with `n` elements dropped from the end.
 *
 * @param {Array} arr The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @returns {Array} Returns the new slice of `array`.
 */
function dropRight(arr, n = 1) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const length = arr.length;
  // If n is negative, treat it as 0. If n is greater than or equal to length, return empty array.
  const dropCount = Math.max(0, n);
  return arr.slice(0, length - dropCount);
}

export { dropRight };
