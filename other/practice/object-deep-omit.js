/**
 * Recursively omits specified keys from an object and its nested objects, returning a new object.
 * This function is immutable: it does not modify the original object.
 *
 * @param {Object} obj The object to process.
 * @param {Array<string>} keysToOmit An array of keys to omit.
 * @returns {Object} A new object with the specified keys omitted recursively.
 */
const deepOmit = (obj, keysToOmit) => {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => deepOmit(item, keysToOmit));
  }

  const newObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (!keysToOmit.includes(key)) {
        newObj[key] = deepOmit(obj[key], keysToOmit);
      }
    }
  }
  return newObj;
};

export default deepOmit;