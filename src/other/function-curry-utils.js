/**
 * Creates a curried function. The curried function can be called with fewer arguments
 * than it was designed to accept. When called, it returns a new function that accepts
 * the remaining arguments. When all arguments are received, the original function is invoked.
 *
 * @param {Function} func The function to curry.
 * @returns {Function} Returns the new curried function.
 */
function curry(func) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }

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

export { curry };
