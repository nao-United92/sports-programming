/**
 * Creates a function that is restricted to invoking `func` once.
 * Repeat calls to the function return the value of the first invocation.
 * The `func` is invoked with the `this` binding and arguments of the created function.
 *
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 */
function once(func) {
  let hasBeenCalled = false;
  let result;

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }

  return function(...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      result = func.apply(this, args);
    }
    return result;
  };
}

module.exports = { once };