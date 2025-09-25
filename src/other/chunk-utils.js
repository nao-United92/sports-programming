/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining elements.
 *
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk.
 * @returns {Array} Returns the new array of chunks.
 */
function chunk(array, size = 1) {
  size = Math.max(Math.trunc(size), 0);
  const length = array == null ? 0 : array.length;
  if (!length || size < 1) {
    return [];
  }
  let index = 0;
  let resIndex = 0;
  const result = new Array(Math.ceil(length / size));

  while (index < length) {
    result[resIndex++] = array.slice(index, (index += size));
  }
  return result;
}

module.exports = { chunk };