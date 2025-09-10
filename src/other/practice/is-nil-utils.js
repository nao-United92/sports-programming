/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 */
const isNil = (value) => {
  return value === null || value === undefined;
};

export { isNil };
