/**
 * Creates a shuffled version of `array` using a version of the Fisher-Yates shuffle.
 *
 * @param {Array} array The array to shuffle.
 * @returns {Array} Returns the new shuffled array.
 */
const shuffle = (array) => {
  const shuffledArray = [...array]; // Create a shallow copy to avoid modifying the original array
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
};

/**
 * Randomizes the order of elements in an array (Fisher-Yates shuffle).
 *
 * @param {Array} array The array to shuffle.
 * @returns {Array} A new array with elements in random order.
 */
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

module.exports = { shuffle, shuffleArray };