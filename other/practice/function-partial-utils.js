/**
 * Creates a function that invokes `func` with `partialArgs` prepended to the arguments it receives.
 *
 * @param {Function} func The function to partially apply arguments to.
 * @param {...*} partialArgs The arguments to prepend to the `func`.
 * @returns {Function} Returns the new partially applied function.
 */
const partial = (func, ...partialArgs) => {
  return function(...restArgs) {
    const combinedArgs = partialArgs.concat(restArgs);
    // Only pass arguments up to the arity of the original function
    const argsToApply = combinedArgs.slice(0, func.length || combinedArgs.length);
    return func.apply(this, argsToApply);
  };
};

export { partial };
