/**
 * Creates a function that memoizes the result of `func`.
 * This advanced version allows providing a custom cache implementation (e.g., LRUCache).
 *
 * @param {Function} func The function to have its output memoized.
 * @param {Object} [options] Options object.
 * @param {Object} [options.cache=new Map()] The cache instance to use.
 * @param {Function} [options.resolver] A function to generate the cache key.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeAdvanced(func, options = {}) {
  const { resolver } = options;
  const cache = options.cache || new Map();

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
}

module.exports = { memoizeAdvanced };
