/**
 * Checks if `value` is classified as a `Boolean` primitive.
 * Note: This does not include `Boolean` objects created with `new Boolean()`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a primitive boolean, else `false`.
 */
const isBoolean = (value) => {
  return typeof value === 'boolean';
};

export default isBoolean;