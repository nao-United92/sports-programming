
/**
 * Removes duplicate elements from an array, returning a new array with unique elements.
 * @param {Array} arr The input array.
 * @returns {Array} A new array containing only unique elements.
 */
export function uniqueArray(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return [...new Set(arr)];
}

/**
 * Flattens a nested array into a single-level array.
 * @param {Array} arr The array to flatten.
 * @returns {Array} A new, flattened array.
 */
export function flattenArray(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.flat(Infinity);
}

/**
 * Divides an array into smaller chunks of a specified size.
 * @param {Array} arr The array to chunk.
 * @param {number} size The size of each chunk.
 * @returns {Array<Array>} An array of arrays, where each inner array is a chunk.
 */
export function chunkArray(arr, size) {
  if (!Array.isArray(arr) || size <= 0) {
    return [];
  }
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

/**
 * Shuffles the elements of an array randomly in place.
 * @param {Array} arr The array to shuffle.
 * @returns {Array} The shuffled array (same reference as input).
 */
export function shuffleArray(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  let currentIndex = arr.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }

  return arr;
}
