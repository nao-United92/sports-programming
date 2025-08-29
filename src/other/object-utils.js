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

module.exports = {
  isEmpty,
};