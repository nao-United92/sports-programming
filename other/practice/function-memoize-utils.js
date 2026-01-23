/**
 * Creates a function that memoizes the result of `func`. If `resolver` is provided,
 * it determines the cache key for storing the result based on the arguments provided to the memoized function.
 * By default, the first argument to the memoized function is used as the map cache key.
 *
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 */
const memoize = (func, resolver) => {
  const cache = new Map();

  const memoized = function(...args) {
    const key = resolver ? resolver(...args) : args[0];

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };

  memoized.cache = cache;
  return memoized;
};

export { memoize };