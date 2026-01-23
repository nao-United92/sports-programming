/**
 * Creates a function that invokes `func` with its arguments reversed.
 *
 * @param {Function} func The function to flip arguments for.
 * @returns {Function} Returns the new flipped function.
 */
const flip = (func) => {
  return function(...args) {
    return func.apply(this, args.reverse());
  };
};

export { flip };
