/**
 * Creates a function that returns the result of invoking the given functions from left to right.
 * The first function is invoked with the arguments of the created function; the subsequent functions
 * are invoked with the result of the previous function.
 *
 * @param {...(Function)} funcs The functions to invoke.
 * @returns {Function} Returns the new composite function.
 */
const flow = (...funcs) => {
  return function(...args) {
    if (funcs.length === 0) {
      return undefined;
    }

    let result = funcs[0].apply(this, args);
    for (let i = 1; i < funcs.length; i++) {
      result = funcs[i].call(this, result);
    }
    return result;
  };
};

export { flow };