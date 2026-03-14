/**
 * Merges objects deeply, with special handling for arrays (concatenating or unique).
 * 
 * @param {Object} target 
 * @param {Object} source 
 * @param {Object} [options={ unique: true }]
 * @returns {Object}
 */
const mergeDeepWithArrays = (target, source, options = { unique: true }) => {
  const result = { ...target };

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (Array.isArray(source[key]) && Array.isArray(target[key])) {
        result[key] = options.unique
          ? [...new Set([...target[key], ...source[key]])]
          : [...target[key], ...source[key]];
      } else if (
        source[key] !== null &&
        typeof source[key] === 'object' &&
        !Array.isArray(source[key]) &&
        target[key] !== null &&
        typeof target[key] === 'object' &&
        !Array.isArray(target[key])
      ) {
        result[key] = mergeDeepWithArrays(target[key], source[key], options);
      } else {
        result[key] = source[key];
      }
    }
  }

  return result;
};

module.exports = mergeDeepWithArrays;
