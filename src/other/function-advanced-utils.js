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

/**
 * Invokes the iteratee `n` times, returning an array of the results of each invocation.
 * The iteratee is invoked with one argument: (index).
 *
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
export function times(n, iteratee) {
  const result = Array(Math.max(0, n));
  for (let i = 0; i < n; i++) {
    result[i] = iteratee(i);
  }
  return result;
}
