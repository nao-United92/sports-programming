/**
 * Checks if `value` is classified as a `String` primitive.
 * Note: This does not include `String` objects created with `new String()`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a primitive string, else `false`.
 */
const isPrimitiveString = (value) => {
  return typeof value === 'string';
};

export default isPrimitiveString;