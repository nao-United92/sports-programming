/**
 * Creates a function that accepts up to one argument, ignoring any additional arguments.
 *
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function unary(func) {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }
  return function(arg) {
    return func.call(this, arg);
  };
}

export { unary };