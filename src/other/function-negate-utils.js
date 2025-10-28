/**
 * Creates a function that negates the result of the predicate `func`.
 * The `func` is invoked with the `this` binding and arguments of the created function.
 *
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
 */
function negate(predicate) {
  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function');
  }
  return function(...args) {
    return !predicate.apply(this, args);
  };
}

export { negate };
