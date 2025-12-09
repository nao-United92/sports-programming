/**
 * Checks if a value is a plain object.
 * An object is considered plain if it's created by the `Object` constructor.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 */
function isObject(value) {
  if (value === null || typeof value !== 'object') {
    return false;
  }
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * Checks if an object has all the specified keys.
 * @param {Object} obj The object to check.
 * @param {string[]} keys An array of keys to check for.
 * @returns {boolean} Returns `true` if the object has all keys, else `false`.
 */
function hasKeys(obj, keys = []) {
  if (!isObject(obj)) {
    return false;
  }
  if (!Array.isArray(keys) || keys.length === 0) {
    return true; // No keys to check, so it trivially passes.
  }
  return keys.every((key) => Object.prototype.hasOwnProperty.call(obj, key));
}

module.exports = {
  isObject,
  hasKeys,
};
