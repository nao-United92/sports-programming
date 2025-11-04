
/**
 * This method is like `partial` except that `partial` arguments are appended
 * to the arguments the new function receives.
 *
 * @param {Function} func The function to partially apply arguments to.
 * @param {...*} partials The arguments to append to the arguments the new function receives.
 * @returns {Function} Returns the new partially applied function.
 */
export const partialRight = (func, ...partials) => {
  return function(...args) {
    return func.apply(this, [...args, ...partials]);
  };
};
