/**
 * Checks if `value` is a finite primitive number or `Number` object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
 */
export const isFinite = (value) => {
  if (typeof value === 'number') {
    return Number.isFinite(value);
  }
  if (typeof value === 'object' && Object.prototype.toString.call(value) === '[object Number]') {
    return Number.isFinite(value.valueOf());
  }
  return false;
};
