/**
 * Randomly shuffles an array using the Fisher-Yates algorithm.
 * 
 * @param {Array} arr - The array to shuffle.
 * @returns {Array} A new shuffled array.
 */
export const shuffle = (arr) => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};
