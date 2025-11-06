/**
 * Creates a function that returns the result of invoking the given functions from left to right.
 * The first function is invoked with the arguments of the created function,
 * the second function is invoked with the result of the first function, and so on.
 *
 * @param {Function[]} fns The functions to pipe.
 * @returns {Function} Returns the new composite function.
 */
export const pipe = (...fns) => {
  if (fns.length === 0) {
    return (...args) => args.length > 1 ? [...args] : args[0];
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return fns.reduce((a, b) => (...args) => b(a(...args)));
};