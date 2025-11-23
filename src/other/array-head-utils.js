/**
 * Gets the first element of `array`.
 *
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 */
export const head = (array) => {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }
  return array[0];
};
