/**
 * Flattens a nested object into a single-level object with dot notation (or custom separator).
 * 
 * @param {Object} obj 
 * @param {string} [separator='.'] 
 * @param {number} [maxDepth=Infinity]
 * @returns {Object}
 */
const flattenObjectCustom = (obj, separator = '.', maxDepth = Infinity) => {
  const result = {};

  const traverse = (current, path = '', depth = 0) => {
    for (const key in current) {
      if (Object.prototype.hasOwnProperty.call(current, key)) {
        const newPath = path ? `${path}${separator}${key}` : key;
        const value = current[key];

        if (
          value !== null &&
          typeof value === 'object' &&
          !Array.isArray(value) &&
          depth < maxDepth - 1
        ) {
          traverse(value, newPath, depth + 1);
        } else {
          result[newPath] = value;
        }
      }
    }
  };

  traverse(obj);
  return result;
};

module.exports = flattenObjectCustom;
