/**
 * Composes functions from right to left.
 * The rightmost function can take multiple arguments as it will be the first to be invoked.
 * The rest of the functions must be unary (accept a single argument).
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} Returns the new composite function.
 */
export function compose(...funcs) {
  if (funcs.length === 0) {
    return (...args) => args.length > 1 ? [...args] : args[0];
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}

/**
 * Composes functions from left to right.
 * The leftmost function can take multiple arguments as it will be the first to be invoked.
 * The rest of the functions must be unary (accept a single argument).
 *
 * @param {...Function} funcs The functions to pipe.
 * @returns {Function} Returns the new composite function.
 */
export function pipe(...funcs) {
  if (funcs.length === 0) {
    return (...args) => args.length > 1 ? [...args] : args[0];
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => b(a(...args)));
}