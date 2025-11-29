// src/other/object-utils.js

/**
 * Performs a deep clone of an object or array.
 *
 * @param {any} obj The object or array to clone.
 * @returns {any} The deep cloned object or array.
 */
const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    const arrCopy = [];
    for (let i = 0; i < obj.length; i++) {
      arrCopy[i] = deepClone(obj[i]);
    }
    return arrCopy;
  }

  const objCopy = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      objCopy[key] = deepClone(obj[key]);
    }
  }
  return objCopy;
};

module.exports = {
  deepClone,
};
