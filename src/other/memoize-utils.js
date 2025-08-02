/**
 * Creates a memoized version of a function. The memoized function caches the
 * results of function calls and returns the cached result when the same inputs
 * occur again.
 *
 * @param {Function} func The function to memoize.
 * @param {Function} [resolver] An optional function to generate the cache key.
 *   If not provided, the first argument to the memoized function is used as the key.
 * @returns {Function} Returns the new memoized function.
 */
export function memoize(func, resolver) {
  const memoized = function(...args) {
    const key = resolver ? resolver(...args) : args[0];
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
}