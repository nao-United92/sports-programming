/**
 * Checks if a value is an object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the value is an object, else `false`.
 */
export const isObject = (value) => {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
};
