/**
 * Performs a deep clone of an object or array.
 * @param {any} obj The object or array to clone.
 * @returns {any} The deep cloned object or array.
 */
export const deepClone = (obj) => {
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

/**
 * Checks if an object is empty (has no enumerable own properties).
 * Non-object values (null, undefined, primitives) are also considered empty.
 * @param {any} obj The value to check.
 * @returns {boolean} True if the object is empty or not an object, false otherwise.
 */
export const isEmpty = (obj) => {
  if (obj === null || typeof obj !== 'object') {
    return true;
  }
  return Object.keys(obj).length === 0;
};