/**
 * Gets `n` random elements at unique keys from `array` up to the size of `array`.
 *
 * @param {Array} arr The array to sample.
 * @param {number} [n=1] The number of elements to sample.
 * @returns {Array} Returns the random elements.
 */
function sampleSize(arr, n = 1) {
  if (!Array.isArray(arr) || arr.length === 0 || n <= 0) {
    return [];
  }

  const length = arr.length;
  const size = Math.min(n, length);
  const result = [];
  const indexes = new Set();

  while (result.length < size) {
    const randomIndex = Math.floor(Math.random() * length);
    if (!indexes.has(randomIndex)) {
      indexes.add(randomIndex);
      result.push(arr[randomIndex]);
    }
  }

  return result;
}

export { sampleSize };
