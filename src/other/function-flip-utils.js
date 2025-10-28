/**
 * Creates a function that invokes `func` with its arguments reversed.
 *
 * @param {Function} func The function to flip arguments for.
 * @returns {Function} Returns the new flipped function.
 */
function flip(func) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }
  return function(...args) {
    return func.apply(this, args.reverse());
  };
}

export { flip };
