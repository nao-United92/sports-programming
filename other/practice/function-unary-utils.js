/**
 * Creates a function that accepts one argument, discarding all additional arguments.
 *
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new function.
 */
const unary = (func) => {
  return function(arg) {
    return func.call(this, arg);
  };
};

export { unary };
