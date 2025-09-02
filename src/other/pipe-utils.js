/**
 * Creates a function that returns the result of invoking the given functions from left to right.
 * The first function is invoked with the arguments of the created function, and each subsequent function is invoked with the result of the previous function.
 *
 * @param {...Function} funcs The functions to pipe.
 * @returns {Function} Returns the new composite function.
 */
export const pipe = (...funcs) => {
  if (funcs.length === 0) {
    return (arg) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => b(a(...args)));
};