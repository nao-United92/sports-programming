/**
 * Gets `n` random elements from `array`.
 *
 * @param {Array} arr The array to sample.
 * @param {number} [n=1] The number of random elements to get.
 * @returns {Array} Returns the random elements.
 */
function arraySampleSize(arr, n = 1) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array for the first argument.');
  }
  if (typeof n !== 'number' || n < 0) {
    throw new TypeError('Expected n to be a non-negative number.');
  }

  if (arr.length === 0 || n === 0) {
    return [];
  }

  // Ensure n does not exceed array length
  const numToSample = Math.min(n, arr.length);

  // Fisher-Yates shuffle (partial) to get n random elements
  const shuffled = [...arr];
  for (let i = 0; i < numToSample; i++) {
    const randomIndex = i + Math.floor(Math.random() * (shuffled.length - i));
    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled.slice(0, numToSample);
}

module.exports = arraySampleSize;
