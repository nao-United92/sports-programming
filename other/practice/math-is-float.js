/**
 * Returns true if the value is a float (non-integer number).
 * @param {any} val
 * @returns {boolean}
 */
export const isFloat = (val) => {
  return typeof val === 'number' && !Number.isInteger(val) && Number.isFinite(val);
};
