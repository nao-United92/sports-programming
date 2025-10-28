/**
 * Creates a function that memoizes the last result of `func`.
 * If `resolver` is provided, it determines the cache key for storing the result
 * based on the arguments provided to the memoized function.
 * By default, the first argument is used as the cache key.
 *
 * @param {Function} func The function to memoize.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 */
function memoize(func, resolver) {
  if (typeof func !== 'function' || (resolver != null && typeof resolver !== 'function')) {
    throw new TypeError('Expected a function');
  }
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

export { memoize };