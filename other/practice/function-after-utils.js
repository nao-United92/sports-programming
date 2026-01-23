/**
 * Creates a function that invokes `func` once `n` times have passed.
 * The `func` is invoked with the last arguments provided to the created function.
 *
 * @param {number} n The number of calls before `func` is invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 */
const after = (n, func) => {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }
  n = Math.floor(n);
  return function(...args) {
    if (--n < 1) {
      return func.apply(this, args);
    }
  };
};

export { after };
