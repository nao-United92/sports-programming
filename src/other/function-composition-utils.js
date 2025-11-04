/**
 * Creates a function that returns the result of invoking the given functions
 * from left to right. Each successive invocation is supplied the return value
 * of the previous.
 *
 * @param {...Function} funcs The functions to invoke.
 * @returns {Function} Returns the new composite function.
 */
export const flow = (...funcs) => {
  return (...args) => {
    const [first, ...rest] = funcs.flat();
    if (!first) return undefined;
    return rest.reduce((result, func) => func(result), first(...args));
  };
};

/**
 * This method is like `flow` except that it creates a function that
 * invokes the given functions from right to left.
 *
 * @param {...Function} funcs The functions to invoke.
 * @returns {Function} Returns the new composite function.
 */
export const flowRight = (...funcs) => {
  return flow(...funcs.flat().reverse());
};