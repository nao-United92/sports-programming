/**
 * Creates a memoized version of a function.
 * The results of the function are cached, so that subsequent calls with the same arguments do not execute the function again.
 *
 * @param {Function} func The function to memoize.
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
    cache.set(key, result);
    return result;
  };
  memoized.cache = new Map();
  return memoized;
}