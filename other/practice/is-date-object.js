/**
 * Checks if `value` is classified as a `Date` object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a `Date` object, else `false`.
 */
const isDateObject = (value) => {
  return Object.prototype.toString.call(value) === '[object Date]';
};

export default isDateObject;