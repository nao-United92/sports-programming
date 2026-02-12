/**
 * Shuffles an array in place using the Fisher-Yates (Knuth) algorithm.
 *
 * @param {Array} arr The array to shuffle.
 * @returns {Array} The shuffled array.
 */
function shuffle(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  const result = [...arr]; // Create a shallow copy to avoid modifying the original array
  let currentIndex = result.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [result[currentIndex], result[randomIndex]] = [
      result[randomIndex],
      result[currentIndex],
    ];
  }

  return result;
}

export { shuffle };
