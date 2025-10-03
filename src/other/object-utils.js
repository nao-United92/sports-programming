/**
 * Performs a deep merge of two objects.
 *
 * @param {object} target The target object to merge into.
 * @param {object} source The source object to merge from.
 * @returns {object} The merged object.
 */
export const deepMerge = (target, source) => {
  const output = { ...target };

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = deepMerge(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }

  return output;
};

const isObject = (item) => {
  return (item && typeof item === 'object' && !Array.isArray(item));
};