/**
 * Merges objects deeply, using a resolver function for conflicting non-object values.
 * 
 * @param {Function} resolver (objValue, srcValue, key) => mergedValue
 * @param {Object} target 
 * @param {...Object} sources 
 * @returns {Object}
 */
const mergeDeepWith = (resolver, target, ...sources) => {
  if (!sources.length) return target;
  const source = sources.shift();

  if (source !== null && typeof source === 'object' && !Array.isArray(source)) {
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (
          source[key] !== null &&
          typeof source[key] === 'object' &&
          !Array.isArray(source[key]) &&
          target[key] !== null &&
          typeof target[key] === 'object' &&
          !Array.isArray(target[key])
        ) {
          mergeDeepWith(resolver, target[key], source[key]);
        } else if (Object.prototype.hasOwnProperty.call(target, key)) {
          target[key] = resolver(target[key], source[key], key);
        } else {
          target[key] = source[key];
        }
      }
    }
  }

  return mergeDeepWith(resolver, target, ...sources);
};

module.exports = mergeDeepWith;
