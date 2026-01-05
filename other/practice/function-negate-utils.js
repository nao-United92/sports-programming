/**
 * Creates a function that returns the opposite of the given predicate function's result.
 *
 * @param {Function} predicate The predicate function to negate.
 * @returns {Function} Returns the new negated function.
 */
const negate = (predicate) => {
  if (typeof predicate !== 'function') {
    throw new TypeError('Expected a function for the first argument.');
  }
  return function(...args) {
    return !predicate(...args);
  };
};

export default negate;
