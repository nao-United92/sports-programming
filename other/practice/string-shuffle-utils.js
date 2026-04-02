/**
 * Shuffles the characters in a string using the Fisher-Yates algorithm.
 * @param {string} str - The string to shuffle.
 * @returns {string} The shuffled string.
 */
export const shuffleString = (str) => {
  if (typeof str !== 'string') return '';
  const arr = str.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
};
