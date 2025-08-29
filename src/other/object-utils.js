/**
 * Checks if an object is empty (has no own enumerable string-keyed properties).
 *
 * @param {object} obj The object to check.
 * @returns {boolean} Returns `true` if the object is empty, else `false`.
 */
const isEmpty = (obj) => {
  if (obj == null) {
    return true;
  }
  return Object.keys(obj).length === 0;
};

/**
 * Creates an object composed of the picked object properties.
 *
 * @param {object} obj The source object.
 * @param {string[]} keys The property keys to pick.
 * @returns {object} Returns the new object.
 */
const pick = (obj, keys) => {
  const result = {};
  if (obj == null) {
    return result;
  }
  for (const key of keys) {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }
  return result;
};

module.exports = {
  isEmpty,
  pick,
};
