/**
 * Creates a memoized version of a function.
 * The result of the function will be cached based on its arguments.
 *
 * @param {Function} func The function to memoize.
 * @returns {Function} Returns the new memoized function.
 */
export function memoize(func) {
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
}