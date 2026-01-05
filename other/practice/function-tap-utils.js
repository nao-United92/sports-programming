/**
 * Invokes `interceptor` with `value` and then returns `value`.
 * The interceptor function receives the value but its return value is ignored.
 * Useful for debugging or side effects in a chain of operations.
 *
 * @param {*} value The value to tap.
 * @param {Function} interceptor The function to invoke with `value`.
 * @returns {*} Returns `value`.
 */
const tap = (value, interceptor) => {
  if (typeof interceptor !== 'function') {
    throw new TypeError('Expected the interceptor to be a function.');
  }
  interceptor(value);
  return value;
};

export default tap;
