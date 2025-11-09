/**
 * Checks if the item is a plain object.
 * @param {*} item The item to check.
 * @returns {boolean} True if the item is a plain object, false otherwise.
 */
const isObject = (item) => {
  return item && typeof item === 'object' && !Array.isArray(item);
};

/**
 * Recursively merges sources objects into the target object.
 *
 * @param {object} target The target object to merge into.
 * @param {...object} sources The source objects to merge from.
 * @returns {object} The merged object.
 */
const deepMerge = (target, ...sources) => {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();
  const output = { ...target };

  if (isObject(output) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in output)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = deepMerge(output[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }

  return deepMerge(output, ...sources);
};

module.exports = { deepMerge };
