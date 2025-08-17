/**
 * Creates a function that is restricted to invoking fn once. Repeat calls to the function return the value of the first invocation.
 *
 * @param {Function} fn The function to restrict.
 * @returns {Function} Returns the new restricted function.
 */
export function once(fn) {
  let hasBeenCalled = false;
  let result;

  return function(...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

/**
 * Creates a function that invokes fn only after it's called n or more times.
 *
 * @param {number} n The number of calls before fn is invoked.
 * @param {Function} fn The function to restrict.
 * @returns {Function} Returns the new restricted function.
 */
export function after(n, fn) {
  let count = 0;

  return function(...args) {
    count++;
    if (count >= n) {
      return fn.apply(this, args);
    }
  };
}
