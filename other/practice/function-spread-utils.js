/**
 * Creates a function that invokes `func` with arguments of the `array` type.
 * The created function accepts arguments, and arguments from the `start` index onwards are
 * passed to `func` as a single array.
 *
 * Example: if `func` is `(a, b, cArray)` and `spread(func, 2)` is called with `(1, 2, 3, 4, 5)`,
 * then `func(1, 2, [3, 4, 5])` is invoked.
 *
 * @param {Function} func The function to spread arguments over.
 * @param {number} [start=0] The index to start grouping arguments into an array.
 * @returns {Function} Returns the new function.
 */
const spread = (func, start = 0) => {
  return function(...args) {
    const leadingArgs = args.slice(0, start);
    const spreadableArgs = args.slice(start); // These are the arguments that will be grouped into an array
    return func.apply(this, [...leadingArgs, spreadableArgs]);
  };
};

export { spread };
