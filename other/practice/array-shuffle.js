/**
 * Shuffles an array in place using the Fisher-Yates (Knuth) algorithm.
 *
 * @param {Array} array The array to shuffle.
 * @returns {Array} The shuffled array.
 */
function arrayShuffle(array) {
  let currentIndex = array.length,
    randomIndex;

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

export { arrayShuffle };