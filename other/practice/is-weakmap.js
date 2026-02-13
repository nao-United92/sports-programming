/**
 * Checks if `value` is classified as a `WeakMap` object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a `WeakMap` object, else `false`.
 */
const isWeakMap = (value) => {
  return Object.prototype.toString.call(value) === '[object WeakMap]';
};

export default isWeakMap;