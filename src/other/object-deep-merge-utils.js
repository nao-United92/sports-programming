/**
 * Checks if a value is a non-array object.
 * @param {*} item The value to check.
 * @returns {boolean} True if the value is a non-array object.
 */
const isObject = (item) => {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

/**
 * Performs a deep merge of objects and returns a new object.
 * Does not modify the source objects. Arrays are overwritten, not merged.
 *
 * @param {Object} target The initial object to merge into.
 * @param {...Object} sources The source objects to merge.
 * @returns {Object} Returns the new merged object.
 */
export const deepMerge = (target, ...sources) => {
  if (!sources.length) {
    return { ...target };
  }
  const source = sources.shift();
  const output = { ...target };

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key]) && key in target && isObject(target[key])) {
        output[key] = deepMerge(target[key], source[key]);
      } else {
        output[key] = source[key];
      }
    });
  }

  return deepMerge(output, ...sources);
};
