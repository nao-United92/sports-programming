/**
 * Shuffles an array in place using the Fisher-Yates (Knuth) algorithm.
 * @param {Array<any>} arr The array to shuffle.
 * @returns {Array<any>} The shuffled array (same instance as input).
 */
function shuffle(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  let currentIndex = arr.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex], arr[currentIndex]];
  }

  return arr;
}

module.exports = shuffle;
