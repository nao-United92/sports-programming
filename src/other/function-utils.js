/**
 * Creates a memoized version of a function. The memoized function caches the results
 * of function calls and returns the cached result when the same inputs occur again.
 *
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key. Defaults to using the first argument.
 * @returns {Function} Returns the new memoized function.
 */
const memoize = (func, resolver) => {
  const memoized = function(...args) {
    const key = resolver ? resolver.apply(this, args) : args[0];
    const cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
  memoized.cache = new Map();
  return memoized;
};

module.exports = {
  memoize,
};
