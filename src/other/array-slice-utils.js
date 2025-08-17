/**
 * Creates a slice of `array` with `n` elements taken from the beginning.
 *
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to take.
 * @returns {Array} Returns the slice of `array`.
 */
export function take(array, n = 1) {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.slice(0, n);
}

/**
 * Creates a slice of `array` with `n` elements dropped from the beginning.
 *
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @returns {Array} Returns the slice of `array`.
 */
export function drop(array, n = 1) {
  if (!Array.isArray(array)) {
    return [];
  }
  return array.slice(n);
}
