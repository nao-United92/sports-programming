/**
 * Creates a function that negates the result of the predicate `func`. The `func` predicate is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
 */
const negate = (predicate) => {
  return function(...args) {
    return !predicate.apply(this, args);
  };
};

export { negate };