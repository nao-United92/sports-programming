/**
 * Chunks an array into smaller arrays of a specified size.
 *
 * @param {Array<any>} arr The array to chunk.
 * @param {number} size The size of each chunk.
 * @returns {Array<Array<any>>} Returns the new array of chunks.
 */
function chunkInGroups(arr, size) {
  if (!Array.isArray(arr) || !Number.isInteger(size) || size <= 0) {
    return [];
  }

  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

module.exports = chunkInGroups;
