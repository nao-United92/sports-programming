/**
 * Memoizes a function, caching its results based on the arguments.
 * Useful for optimizing expensive function calls by returning cached results for repeated inputs.
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

/**
 * Memoizes a function using a custom resolver to generate the cache key.
 * @param {Function} func The function to memoize.
 * @param {Function} resolver The function to compute the cache key.
 * @returns {Function} The memoized function.
 */
export function memoizeWith(func, resolver) {
  const cache = {};

  return function(...args) {
    const key = resolver.apply(this, args);
    if (cache[key]) {
      return cache[key];
    }

    const result = func.apply(this, args);
    cache[key] = result;
    return result;
  };
}
