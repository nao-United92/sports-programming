/**
 * Shuffles an array using the Fisher-Yates algorithm.
 * @param {Array} arr
 * @returns {Array} The shuffled array.
 */
const shuffle = (arr) => {
  if (!Array.isArray(arr)) return arr;
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

module.exports = shuffle;
