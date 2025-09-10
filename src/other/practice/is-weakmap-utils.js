/**
 * Checks if `value` is classified as a `WeakMap` object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
 */
const isWeakMap = (value) => {
  return Object.prototype.toString.call(value) === '[object WeakMap]';
};

export { isWeakMap };
