/**
 * Creates a function that invokes `func` with `partial` arguments prepended
 * to the arguments it receives.
 *
 * @param {Function} func The function to partially apply arguments to.
 * @param {...*} partials The arguments to prepend to the arguments the new function receives.
 * @returns {Function} Returns the new partially applied function.
 */
export const partial = (func, ...partials) => {
  return function(...args) {
    return func.apply(this, [...partials, ...args]);
  };
};