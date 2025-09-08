/**
 * Creates an object composed of the picked object properties.
 * @param {Object} obj The source object.
 * @param {...string} keys The property paths to pick.
 * @returns {Object} Returns the new object.
 */
const pick = (obj, ...keys) => {
  const result = {};
  if (obj == null) {
    return result;
  }
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
};

/**
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 * @param {Object} obj The source object.
 * @param {...string} keys The property paths to omit.
 * @returns {Object} Returns the new object.
 */
const omit = (obj, ...keys) => {
  if (obj == null) {
    return {};
  }
  const result = { ...obj };
  for (const key of keys) {
    delete result[key];
  }
  return result;
};

/**
 * Checks if a value is an empty object.
 * @param {*} value The value to check.
 * @returns {boolean} Returns true if the value is an empty object, else false.
 */
const isEmpty = (value) => {
  if (value == null) {
    return true;
  }
  if (typeof value !== 'object' || value.constructor !== Object) {
      return false;
  }
  return Object.keys(value).length === 0;
};

module.exports = { pick, omit, isEmpty };