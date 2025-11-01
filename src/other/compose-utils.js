/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * @param {...Function} fns The functions to compose.
 * @returns {Function} Returns the new composite function.
 */
export const compose = (...fns) => (initialValue) =>
  fns.reduceRight((acc, fn) => fn(acc), initialValue);
