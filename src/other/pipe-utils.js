/**
 * Composes single-argument functions from left to right.
 * The first function can take multiple arguments; the remaining functions must be unary.
 *
 * @param {...Function} funcs The functions to pipe.
 * @returns {Function} A function obtained by composing the argument functions from left to right.
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