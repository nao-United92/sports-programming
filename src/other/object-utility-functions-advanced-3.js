// src/other/object-utility-functions-advanced-3.js

/**
 * Creates a shallow copy of an object excluding the specified properties.
 *
 * @param {Object} obj The source object.
 * @param {string[]} keysToOmit The property keys to omit.
 * @returns {Object} Returns the new object with specified properties excluded.
 */
const omit = (obj, keysToOmit) => {
  if (typeof obj !== 'object' || obj === null) {
    return {};
  }
  if (!Array.isArray(keysToOmit)) {
    return { ...obj }; // Return a shallow copy if keysToOmit is not an array
  }

  const newObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && !keysToOmit.includes(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
};

module.exports = {
  omit,
};
