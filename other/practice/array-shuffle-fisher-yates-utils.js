/**
 * Shuffles an array in place using the Fisher-Yates (Knuth) algorithm.
 * The original array is modified.
 *
 * @param {Array} array The array to shuffle.
 * @returns {Array} Returns the shuffled array.
 * @example
 *
 * const arr = [1, 2, 3, 4, 5];
 * shuffle(arr);
 * // => [3, 5, 1, 2, 4] (result will vary)
 */
function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default shuffle;