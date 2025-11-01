/**
 * Creates a memoized version of a function. The memoized function caches the
 * results of the original function for a given set of arguments.
 *
 * @param {Function} func The function to memoize.
 * @returns {Function} Returns the new memoized function.
 */
export const memoize = (func) => {
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
};
