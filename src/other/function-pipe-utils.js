/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary. The `pipe` function is
 * variadic: it accepts any number of arguments.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} Returns the new composite function.
 */
function pipe(...funcs) {
  if (funcs.length === 0) {
    return (...args) => args.length > 1 ? [...args] : args[0];
  }

  if (funcs.some(func => typeof func !== 'function')) {
    throw new TypeError('Expected all arguments to be functions');
  }

  return funcs.reduce((a, b) => (...args) => b(a(...args)));
}

export { pipe };
