/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining elements.
 *
 * @param {Array} arr The array to process.
 * @param {number} [size=1] The length of each chunk.
 * @returns {Array} Returns the new array of grouped elements.
 */
function chunk(arr, size = 1) {
  if (!Array.isArray(arr) || size <= 0) {
    return [];
  }

  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

export { chunk };
