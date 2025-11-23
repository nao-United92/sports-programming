/**
 * Gets the last element of `array`.
 *
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 */
export const last = (array) => {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }
  return array[array.length - 1];
};