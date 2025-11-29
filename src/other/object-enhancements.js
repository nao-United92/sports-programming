/**
 * Creates a deep clone of a value.
 *
 * @param {*} value The value to clone.
 * @returns {*} Returns the deep cloned value.
 */
const deepClone = (value) => {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  if (Array.isArray(value)) {
    return value.map(item => deepClone(item));
  }

  const clonedObject = {};
  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      clonedObject[key] = deepClone(value[key]);
    }
  }
  return clonedObject;
};

/**
 * Checks if an object is empty.
 *
 * @param {object} obj The object to check.
 * @returns {boolean} Returns `true` if the object is empty, else `false`.
 */
const isEmpty = (obj) => {
  if (obj === null || obj === undefined) {
    return true;
  }
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

module.exports = {
  deepClone,
  isEmpty,
};