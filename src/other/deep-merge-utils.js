/**
 * Checks if a value is a non-array object.
 * @param {*} item The value to check.
 * @returns {boolean} True if the value is a non-array object, false otherwise.
 */
const isObject = (item) => {
  return item && typeof item === 'object' && !Array.isArray(item);
};

/**
 * Deeply merges two or more objects.
 * @param {...Object} sources The objects to merge.
 * @returns {Object} The merged object.
 */
const deepMerge = (target, ...sources) => {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, { [key]: {} });
        }
        deepMerge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return deepMerge(target, ...sources);
};

module.exports = { deepMerge };
