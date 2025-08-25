/**
 * Creates a new function that, when called, caches the result of calling `func` and
 * returns the cached result for subsequent calls with the same arguments.
 *
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key. By default, arguments are stringified.
 * @returns {Function} Returns the new memoized function.
 */
export const memoize = (func, resolver) => {
  const cache = new Map();

  const memoized = function(...args) {
    const key = resolver ? resolver.apply(this, args) : JSON.stringify(args);

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
