/**
 * Creates a shuffled copy of `array` using a version of the Fisher-Yates shuffle.
 * @param {Array} array The array to shuffle.
 * @returns {Array} Returns the new shuffled array.
 */
export function shuffle(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  const shuffledArray = [...array];
  let currentIndex = shuffledArray.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex],
      shuffledArray[currentIndex],
    ];
  }

  return shuffledArray;
}

/**
 * Chunks an array into smaller arrays of a specified size.
 * @param {Array} array The array to chunk.
 * @param {number} size The size of each chunk.
 * @returns {Array<Array>} Returns the new array of chunked arrays.
 */
export function chunkArray(array, size) {
  if (!Array.isArray(array) || size <= 0) {
    return [];
  }

  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}