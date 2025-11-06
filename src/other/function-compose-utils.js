/**
 * Creates a function that returns the result of invoking the given functions from right to left.
 * The rightmost function is invoked with the arguments of the created function,
 * the second rightmost function is invoked with the result of the first function, and so on.
 *
 * @param {Function[]} fns The functions to compose.
 * @returns {Function} Returns the new composite function.
 */
export const compose = (...fns) => {
  if (fns.length === 0) {
    return (...args) => args.length > 1 ? [...args] : args[0];
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return fns.reduce((a, b) => (...args) => a(b(...args)));
};