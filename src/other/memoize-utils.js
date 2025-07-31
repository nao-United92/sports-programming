/**
 * Memoizes a function, caching its results based on its arguments.
 * Subsequent calls with the same arguments will return the cached result instead of re-executing the function.
 *
 * @param {Function} func The function to memoize.
 * @returns {Function} The memoized function.
 */
export function memoize(func) {
  const cache = {};

  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }

    const result = func.apply(this, args);
    cache[key] = result;
    return result;
  };
}