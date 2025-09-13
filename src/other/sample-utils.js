/**
 * Gets a random element from `array`.
 *
 * @param {Array} array The array to sample.
 * @returns {*} Returns the random element.
 */
export function sample(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}
