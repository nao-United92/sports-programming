/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 */
export const isSymbol = (value) => {
  return typeof value === 'symbol' ||
         (typeof value === 'object' && Object.prototype.toString.call(value) === '[object Symbol]');
};
