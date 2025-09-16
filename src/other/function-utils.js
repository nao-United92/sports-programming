
/**
 * Creates a function that is restricted to invoking func once. Repeat calls to the function return the value of the first invocation. The func is invoked with the this binding and arguments of the created function.
 *
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 */
const once = (func) => {
  let hasBeenCalled = false;
  let result;

  return function(...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = func.apply(this, args);
    }
    return result;
  };
};

/**
 * Creates a function that memoizes the result of func. If memory is provided, it will be used for caching results.
 *
 * @param {Function} func The function to have its output memoized.
 * @param {Object} [cache={}] The cache object to store results.
 * @returns {Function} Returns the new memoized function.
 */
const memoize = (func, cache = new Map()) => {
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

module.exports = { once, memoize };
