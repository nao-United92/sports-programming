/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 */
export const isFunction = (value) => {
  if (value === null || typeof value !== 'function') {
    return false;
  }
  const tag = Object.prototype.toString.call(value);
  return tag === '[object Function]' ||
         tag === '[object AsyncFunction]' ||
         tag === '[object GeneratorFunction]' ||
         tag === '[object Proxy]'; // Proxies can wrap functions
};
