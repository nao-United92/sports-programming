/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining elements.
 *
 * @param {Array} array The array to process.
 * @param {number} size The length of each chunk.
 * @returns {Array} Returns the new array of grouped elements.
 */
export function chunk(array, size) {
  if (!Array.isArray(array) || size <= 0) {
    return [];
  }

  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}