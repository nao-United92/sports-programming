/**
 * Creates a curried version of `func`.
 * If `arity` is provided, it specifies the number of arguments `func` expects.
 * Otherwise, `func.length` is used.
 *
 * @param {Function} func The function to curry.
 * @param {number} [arity=func.length] The arity of `func`.
 * @returns {Function} Returns the new curried function.
 */
export function curry(func, arity = func.length) {
  return function curried(...args) {
    const context = this; // Capture the context
    if (args.length >= arity) {
      return func.apply(context, args);
    } else {
      return function(...moreArgs) {
        return curried.apply(context, args.concat(moreArgs));
      };
    }
  };
}
