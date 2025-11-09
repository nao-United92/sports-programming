/**
 * Creates a function that memoizes the last result of `func`. If `resolver` is provided,
 * it determines the cache key for storing the result based on the arguments provided to the memoized function.
 *
 * @param {Function} func The function to memoize.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 */
const memoize = (func, resolver) => {
  const cache = new Map();

  const memoized = function (...args) {
    const key = resolver ? resolver(...args) : JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };

  memoized.cache = cache; // Expose cache for testing or advanced usage
  return memoized;
};

module.exports = { memoize };