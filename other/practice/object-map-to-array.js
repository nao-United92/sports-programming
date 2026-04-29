/**
 * Maps an object to an array using a provided function.
 * @param {Object} obj
 * @param {Function} fn - (value, key, object) => any
 * @returns {Array}
 */
export const objectMapToArray = (obj, fn) => {
  return Object.keys(obj).map((key) => fn(obj[key], key, obj));
};
