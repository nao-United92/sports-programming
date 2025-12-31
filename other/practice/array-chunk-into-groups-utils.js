// Chunks an array into smaller arrays of a specified size.
export const chunkIntoGroups = (arr, size) => {
  if (size <= 0) {
    throw new Error('Chunk size must be a positive number.');
  }
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};