/**
 * Finds all indices of elements matching a predicate.
 * 
 * @param {Array} arr 
 * @param {Function} predicate 
 * @returns {number[]}
 */
const findIndicesOfAll = (arr, predicate) => {
  return arr.reduce((acc, val, i) => {
    if (predicate(val, i, arr)) {
      acc.push(i);
    }
    return acc;
  }, []);
};

module.exports = findIndicesOfAll;
