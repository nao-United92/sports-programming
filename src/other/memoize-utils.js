/**
 * Creates a function that caches the result of `func`.
 * If `resolver` is provided, it determines the cache key for storing the result based on the arguments provided to the memoized function.
 * Otherwise, the first argument of the memoized function is used as the cache key.
 *
 * @param {Function} func The function to memoize.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 */
export function memoize(func, resolver) {
  const memoized = function(...args) {
    const key = resolver ? resolver.apply(this, args) : args[0];
    if (memoized.cache.has(key)) {
      return memoized.cache.get(key);
    }
    const result = func.apply(this, args);
    memoized.cache.set(key, result);
    return result;
  };

  memoized.cache = new Map();

  return memoized;
}