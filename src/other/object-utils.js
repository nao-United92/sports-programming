
/**
 * Deeply clones an object.
 * @param {any} obj The object to clone.
 * @returns {any} The cloned object.
 */
export const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }

  const clonedObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
};

/**
 * Checks if an object is empty.
 * @param {object} obj The object to check.
 * @returns {boolean} True if the object is empty, false otherwise.
 */
export const isEmpty = (obj) => {
  if (obj == null) {
    return true;
  }
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};
