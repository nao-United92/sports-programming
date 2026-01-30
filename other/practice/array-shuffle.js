// other/practice/array-shuffle.js
/**
 * Randomizes the order of the elements in an array using the Fisher-Yates (Knuth) shuffle algorithm.
 *
 * @param {Array} arr The array to shuffle.
 * @returns {Array} Returns the shuffled array.
 * @example
 *
 * arrayShuffle([1, 2, 3, 4]);
 * // => [3, 1, 4, 2] (shuffled array)
 */
function arrayShuffle(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  const shuffledArr = [...arr];
  let currentIndex = shuffledArr.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [shuffledArr[currentIndex], shuffledArr[randomIndex]] = [
      shuffledArr[randomIndex],
      shuffledArr[currentIndex],
    ];
  }

  return shuffledArr;
}

module.exports = arrayShuffle;
