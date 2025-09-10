/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 */
const isNumber = (value) => {
  return typeof value === 'number' || (typeof value === 'object' && value !== null && Object.prototype.toString.call(value) === '[object Number]');
};

export { isNumber };
