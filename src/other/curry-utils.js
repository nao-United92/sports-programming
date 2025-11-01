/**
 * Creates a curried version of `func`. A curried function receives arguments
 * one at a time. When all arguments are received, the original function is invoked.
 *
 * @param {Function} func The function to curry.
 * @returns {Function} Returns the new curried function.
 */
export const curry = (func) => {
  const arity = func.length;

  return function curried(...args) {
    if (args.length >= arity) {
      return func.apply(this, args);
    }

    return function(...args2) {
      return curried.apply(this, args.concat(args2));
    };
  };
};
