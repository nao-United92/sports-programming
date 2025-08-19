/**
 * Checks if a value is empty.
 * Empty is defined as: null, undefined, an empty string, an empty array, or an empty object.
 * @param {*} value The value to check.
 * @returns {boolean} True if the value is empty, false otherwise.
 */
function isEmpty(value) {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length === 0;
  }

  if (typeof value === 'object') {
    return Object.keys(value).length === 0;
  }

  return false;
}

module.exports = {
  isEmpty,
};
