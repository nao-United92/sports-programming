/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a `Map` object, else `false`.
 */
const isMap = (value) => {
  return Object.prototype.toString.call(value) === '[object Map]';
};

export default isMap;