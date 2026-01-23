/**
 * Creates a function that provides `value` to the wrapper function as its first argument.
 * The `wrapper` is invoked with the `this` binding of the created function.
 *
 * @param {Function} value The function to wrap.
 * @param {Function} wrapper The wrapper function.
 * @returns {Function} Returns the new wrapped function.
 */
const wrap = (value, wrapper) => {
  return function(...args) {
    return wrapper.apply(this, [value].concat(args));
  };
};

export { wrap };
