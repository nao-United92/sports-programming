/**
 * Invokes `interceptor` with the `value` and then returns `value`.
 * The `interceptor` is invoked with the `this` binding and arguments of the created function.
 *
 * @param {*} value The value to provide to `interceptor`.
 * @param {Function} interceptor The function to invoke.
 * @returns {*} Returns `value`.
 */
function tap(value, interceptor) {
  if (typeof interceptor !== 'function') {
    throw new TypeError('Expected a function');
  }
  interceptor(value);
  return value;
}

export { tap };
