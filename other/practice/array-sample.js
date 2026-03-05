/**
 * Gets a random element from an array.
 * @param {Array} array - The array to sample.
 * @returns {*} - The random element.
 */
function sample(array) {
  if (!Array.isArray(array) || array.length === 0) return undefined;
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

module.exports = sample;
