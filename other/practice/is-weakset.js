/**
 * Checks if `value` is classified as a `WeakSet` object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a `WeakSet` object, else `false`.
 */
const isWeakSet = (value) => {
  return Object.prototype.toString.call(value) === '[object WeakSet]';
};

export default isWeakSet;