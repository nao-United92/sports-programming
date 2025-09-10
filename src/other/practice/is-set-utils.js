/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
const isSet = (value) => {
  return Object.prototype.toString.call(value) === '[object Set]';
};

export { isSet };
