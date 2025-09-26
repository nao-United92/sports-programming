/**
 * Gets a random element from `array`.
 *
 * @param {Array} array The array to sample.
 * @returns {*} Returns the random element.
 */
function sample(array) {
  const length = array == null ? 0 : array.length;
  return length ? array[Math.floor(Math.random() * length)] : undefined;
}

module.exports = { sample };