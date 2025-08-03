/**
 * Performs a deep merge of objects and returns a new object.
 * Does not modify the original objects.
 *
 * @param {...object} objects - The objects to merge.
 * @returns {object} - The new merged object.
 */
function deepMerge(...objects) {
  const isObject = (item) => (item && typeof item === 'object' && !Array.isArray(item));
  
  let result = {};

  for (const source of objects) {
    if (isObject(source)) {
      for (const key in source) {
        if (isObject(source[key])) {
          // if the key already exists and is an object, we recurse
          if (key in result && isObject(result[key])) {
            result[key] = deepMerge(result[key], source[key]);
          } else {
            // otherwise, we just assign it (cloning it)
            result[key] = deepMerge({}, source[key]);
          }
        } else {
          // for non-objects (primitives, arrays), we just assign
          result[key] = source[key];
        }
      }
    }
  }

  return result;
}

module.exports = { deepMerge };
