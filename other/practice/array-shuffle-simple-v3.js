/**
 * Shuffles an array (simple implementation).
 * @param {Array} arr
 * @returns {Array}
 */
export const shuffleSimple = (arr) => {
  return [...arr].sort(() => Math.random() - 0.5);
};
