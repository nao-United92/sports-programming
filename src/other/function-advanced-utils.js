/**
 * Creates a debounced function that delays invoking `func` until after `delay` milliseconds
 * have passed since the last time the debounced function was invoked.
 * @param {Function} func The function to debounce.
 * @param {number} delay The number of milliseconds to delay.
 * @returns {Function} Returns the new debounced function.
 */
export function debounce(func, delay) {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}

/**
 * Creates a throttled function that only invokes `func` at most once per `limit` milliseconds.
 * @param {Function} func The function to throttle.
 * @param {number} limit The number of milliseconds to throttle invocations to.
 * @returns {Function} Returns the new throttled function.
 */
export function throttle(func, limit) {
  let inThrottle;
  let lastResult;
  return function(...args) {
    const context = this;
    if (!inThrottle) {
      inThrottle = true;
      lastResult = func.apply(context, args);
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
    return lastResult;
  };
}

/**
 * Creates a memoized version of a function that caches its return value based on its arguments.
 * @param {Function} func The function to memoize.
 * @returns {Function} Returns the new memoized function.
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
 * Creates a function that is restricted to invoking func once. Repeat calls to the function return the value of the first invocation.
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