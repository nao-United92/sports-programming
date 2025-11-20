/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining elements.
 *
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk.
 * @returns {Array} Returns the new array of chunks.
 */
function chunk(array, size = 1) {
  if (!Array.isArray(array) || size < 1) {
    return [];
  }

  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

/**
 * Chunks an array into smaller arrays of a specified size.
 * If the array cannot be split evenly, the last chunk will contain the remaining elements.
 *
 * @param {Array} arr The array to chunk.
 * @param {number} size The size of each chunk.
 * @returns {Array<Array>} A new array containing the chunks.
 */
function chunkArrayInGroups(arr, size) {
  if (!Array.isArray(arr) || size <= 0) {
    return [];
  }
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

module.exports = { chunk, chunkArrayInGroups };