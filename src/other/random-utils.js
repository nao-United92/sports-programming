/**
 * Shuffles an array randomly using the Fisher-Yates (Knuth) algorithm.
 * Creates a new array with the shuffled elements, without modifying the original array.
 * @param {Array} array The array to shuffle.
 * @returns {Array} A new array with the shuffled elements.
 */
export function shuffle(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
