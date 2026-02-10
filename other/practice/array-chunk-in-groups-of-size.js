/**
 * Chunks an array into smaller arrays of a specified size.
 *
 * @param {Array<any>} array The array to chunk.
 * @param {number} size The size of each chunk.
 * @returns {Array<Array<any>>} An array of chunks.
 */
const arrayChunkInGroupsOfSize = (array, size) => {
  if (size <= 0) {
    throw new Error('Chunk size must be greater than 0.');
  }
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

export default arrayChunkInGroupsOfSize;
