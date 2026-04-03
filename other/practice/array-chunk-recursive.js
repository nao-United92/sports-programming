/**
 * Splits an array into chunks of a given size using recursion.
 * @param {any[]} arr 
 * @param {number} size 
 * @returns {any[][]}
 */
const chunkRecursive = (arr, size) => {
  if (arr.length <= size) return [arr];
  return [arr.slice(0, size), ...chunkRecursive(arr.slice(size), size)];
};

module.exports = chunkRecursive;
