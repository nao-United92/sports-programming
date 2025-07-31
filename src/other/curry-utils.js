/**
 * Curries a function, allowing it to be called with fewer arguments than it expects.
 * It returns a new function that collects arguments until all are provided, then executes the original function.
 *
 * @param {Function} func The function to curry.
 * @returns {Function} The curried function.
 */
export function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...moreArgs) {
        return curried.apply(this, args.concat(moreArgs));
      };
    }
  };
}
