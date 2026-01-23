/**
 * Creates a curried version of `func`. If `func` is invoked with too few arguments,
 * it returns a new function that accepts the remaining arguments. If `func` is invoked
 * with enough arguments, it executes `func` with all supplied arguments.
 *
 * @param {Function} func The function to curry.
 * @returns {Function} Returns the new curried function.
 */
const curry = (func) => {
  return function curried(...args) {
    const context = this; // Capture the 'this' context

    if (args.length >= func.length) {
      return func.apply(context, args);
    } else {
      return function(...moreArgs) {
        return curried.apply(context, args.concat(moreArgs));
      };
    }
  };
};

export { curry };
