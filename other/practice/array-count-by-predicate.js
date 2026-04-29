/**
 * Counts the number of elements that satisfy the predicate.
 * @param {Array} arr
 * @param {Function} predicate
 * @returns {number}
 */
export const countByPredicate = (arr, predicate) => {
  return arr.reduce((count, val) => (predicate(val) ? count + 1 : count), 0);
};
