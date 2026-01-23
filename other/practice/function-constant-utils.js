/**
 * Creates a function that returns `value`.
 *
 * @param {*} value The value to return.
 * @returns {Function} Returns the new constant function.
 */
const constant = (value) => {
  return () => value;
};

export { constant };
