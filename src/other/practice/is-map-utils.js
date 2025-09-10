/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
const isMap = (value) => {
  return Object.prototype.toString.call(value) === '[object Map]';
};

export { isMap };
