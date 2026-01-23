/**
 * Creates a function that returns the result of invoking the given functions from right to left.
 * The rightmost function is invoked with the arguments of the created function; the subsequent functions
 * are invoked with the result of the previous function.
 *
 * @param {...(Function)} funcs The functions to invoke.
 * @returns {Function} Returns the new composite function.
 */
const compose = (...funcs) => {
  return function(...args) {
    if (funcs.length === 0) {
      return args.length > 0 ? args[0] : undefined;
    }

    const last = funcs[funcs.length - 1];
    let result = last.apply(this, args);

    for (let i = funcs.length - 2; i >= 0; i--) {
      result = funcs[i].call(this, result);
    }
    return result;
  };
};

export { compose };
