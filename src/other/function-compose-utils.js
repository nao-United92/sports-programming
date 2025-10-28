/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary. The `compose` function is
 * variadic: it accepts any number of arguments.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} Returns the new composite function.
 */
function compose(...funcs) {
  if (funcs.length === 0) {
    return (...args) => args.length > 1 ? [...args] : args[0];
  }

  if (funcs.some(func => typeof func !== 'function')) {
    throw new TypeError('Expected all arguments to be functions');
  }

  const last = funcs[funcs.length - 1];
  const rest = funcs.slice(0, -1);

  return (...args) => rest.reduceRight((composed, f) => f(composed), last(...args));
}

export { compose };
