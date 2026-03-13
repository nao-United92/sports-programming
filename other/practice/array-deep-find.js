/**
 * Recursively searches for an element in nested arrays that matches a predicate.
 * 
 * @param {Array} arr 
 * @param {Function} predicate 
 * @returns {*} The found element or undefined
 */
const deepFind = (arr, predicate) => {
  for (const item of arr) {
    if (predicate(item)) {
      return item;
    }
    if (Array.isArray(item)) {
      const found = deepFind(item, predicate);
      if (found !== undefined) return found;
    }
  }
  return undefined;
};

module.exports = deepFind;
