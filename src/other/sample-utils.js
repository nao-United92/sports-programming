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
  const length = array.length;
  return array[Math.floor(Math.random() * length)];
}

/**
 * Gets `n` random elements from `array`.
 *
 * @param {Array} array The array to sample.
 * @param {number} [n=1] The number of elements to sample.
 * @returns {Array} Returns the random elements.
 */
export function sampleSize(array, n = 1) {
  if (!Array.isArray(array) || array.length === 0) {
    return [];
  }
  const length = array.length;
  n = Math.max(Math.min(n, length), 0);
  const last = length - 1;
  const result = [...array];
  for (let i = 0; i < n; i++) {
    const rand = i + Math.floor(Math.random() * (last - i + 1));
    const temp = result[rand];
    result[rand] = result[i];
    result[i] = temp;
  }
  return result.slice(0, n);
}