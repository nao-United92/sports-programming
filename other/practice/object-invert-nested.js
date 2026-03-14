/**
 * Inverts an object's keys and values, including nested properties.
 * Nested properties are represented as dot-separated paths.
 * 
 * @param {Object} obj 
 * @returns {Object}
 */
const invertNested = (obj) => {
  const result = {};

  const traverse = (currentObj, path = '') => {
    for (const key in currentObj) {
      if (Object.prototype.hasOwnProperty.call(currentObj, key)) {
        const fullPath = path ? `${path}.${key}` : key;
        const value = currentObj[key];

        if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
          traverse(value, fullPath);
        } else {
          result[value] = fullPath;
        }
      }
    }
  };

  traverse(obj);
  return result;
};

module.exports = invertNested;
