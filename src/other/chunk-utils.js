/**
 * Splits an array into smaller chunks of a specified size.
 *
 * @param {Array} array The array to process.
 * @param {number} size The length of each chunk.
 * @returns {Array<Array>} Returns the new array of chunks.
 */
export function chunk(array, size) {
  if (!Array.isArray(array)) {
    throw new Error('Expected an array for the first argument.');
  }
  if (typeof size !== 'number' || size <= 0) {
    throw new Error('Expected a positive number for the second argument (size).');
  }

  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}