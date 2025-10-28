/**
 * Creates a function that invokes `func` with `partials` prepended to the arguments
 * it receives. This technique is known as partial application.
 *
 * @param {Function} func The function to partially apply arguments to.
 * @param {...*} partials The arguments to prepend to the `func`.
 * @returns {Function} Returns the new partially applied function.
 */
function partial(func, ...partials) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }

  return function(...args) {
    return func.apply(this, partials.concat(args));
  };
}

export { partial };
