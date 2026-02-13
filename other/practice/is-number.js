/**
 * Checks if `value` is classified as a `Number` primitive.
 * Note: This does not include `Number` objects created with `new Number()`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a primitive number, else `false`.
 */
const isNumber = (value) => {
  return typeof value === 'number';
};

export default isNumber;