/**
 * Creates a memoized version of a function. The results of previous calls
 * with the same arguments are cached and returned, instead of re-computing.
 *
 * @param {Function} func The function to memoize.
 * @returns {Function} Returns the new memoized function.
 */
const memoize = (func) => {
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func(...args);
    cache.set(key, result);
    return result;
  };
};

module.exports = { memoize };