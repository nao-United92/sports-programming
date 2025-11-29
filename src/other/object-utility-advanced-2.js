// src/other/object-utility-advanced-2.js

/**
 * Creates a shallow copy of an object composed of the picked object properties.
 *
 * @param {Object} obj The source object.
 * @param {string[]} keys The property keys to pick.
 * @returns {Object} Returns the new object.
 */
const pick = (obj, keys) => {
  if (typeof obj !== 'object' || obj === null || !Array.isArray(keys)) {
    return {};
  }

  const newObj = {};
  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

module.exports = {
  pick,
};
