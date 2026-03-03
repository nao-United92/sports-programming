/**
 * Creates a memoized version of a function.
 * @param {Function} fn
 * @returns {Function} The memoized function.
 */
const memoize = (fn) => {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
};

module.exports = memoize;
