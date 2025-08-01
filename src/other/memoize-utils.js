
/**
 * Creates a new function that, when called, caches the result of calling `func` and
 * returns the cached result. Subsequent calls with the same arguments will return the cached result.
 *
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 */
export function memoize(func, resolver) {
  const memoized = function(...args) {
    const key = resolver ? resolver.apply(this, args) : args[0];
    const cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func.apply(this, args);
    memoized.cache.set(key, result);
    return result;
  };
  memoized.cache = new Map();
  return memoized;
}
