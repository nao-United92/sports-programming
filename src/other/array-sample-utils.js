/**
 * Gets a random element from `array`.
 * If `n` is provided, it returns an array of `n` random elements.
 *
 * @param {Array} array The array to sample.
 * @param {number} [n] The number of elements to sample.
 * @returns {*} Returns the random element(s).
 */
const sample = (array, n) => {
  if (!Array.isArray(array) || array.length === 0) {
    return n === undefined ? undefined : [];
  }

  if (n === undefined) {
    return array[Math.floor(Math.random() * array.length)];
  }

  if (n <= 0) {
    return [];
  }

  const result = [];
  const arrCopy = [...array]; // Create a shallow copy to avoid modifying the original array

  const count = Math.min(n, arrCopy.length);
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * arrCopy.length);
    result.push(arrCopy.splice(randomIndex, 1)[0]); // Remove and add to result
  }
  return result;
};

module.exports = { sample };