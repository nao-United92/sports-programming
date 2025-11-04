/**
 * Checks if `key` is a direct property of `object`.
 *
 * @param {object} object The object to query.
 * @param {string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
export const has = (object, key) => {
  return object != null && Object.prototype.hasOwnProperty.call(object, key);
};