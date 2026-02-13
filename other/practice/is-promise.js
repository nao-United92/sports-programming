/**
 * Checks if `value` is a Promise.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a Promise, else `false`.
 */
const isPromise = (value) => {
  return value instanceof Promise ||
         (value !== null &&
          typeof value === 'object' &&
          typeof value.then === 'function' &&
          typeof value.catch === 'function');
};

export default isPromise;