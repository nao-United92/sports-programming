/**
 * Creates a function that is restricted to invoking func once. Repeat calls
 * to the function return the value of the first invocation.
 *
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 */
export function once(func) {
  let hasBeenCalled = false;
  let result;

  return function(...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = func.apply(this, args);
    }
    return result;
  };
}

/**
 * Creates a function that memoizes the result of func. If memoized function is
 * called with the same arguments, the cached result is returned instead of
 * invoking func.
 *
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 */
export function memoize(func, resolver) {
  const cache = new Map();

  return function(...args) {
    const key = resolver ? resolver(...args) : JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
}
