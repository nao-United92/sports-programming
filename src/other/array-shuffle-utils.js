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