/**
 * Gets the last element of `array`.
 *
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 */
export function last(array) {
  const length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}
