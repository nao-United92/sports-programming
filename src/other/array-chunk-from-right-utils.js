/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements. This function chunks from the right.
 *
 * @param {Array} arr The array to process.
 * @param {number} [size=1] The length of each chunk.
 * @returns {Array} Returns the new array of chunks.
 */
const chunkFromRight = (arr, size = 1) => {
  if (!Array.isArray(arr) || size <= 0) {
    return [];
  }
  const result = [];
  for (let i = arr.length; i > 0; i -= size) {
    result.unshift(arr.slice(Math.max(0, i - size), i));
  }
  return result;
};

module.exports = { chunkFromRight };
