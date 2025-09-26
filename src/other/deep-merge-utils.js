/**
 * Performs a deep merge of objects and returns a new object.
 * Does not modify the original objects.
 *
 * @param {...Object} objects The objects to merge.
 * @returns {Object} The merged object.
 */
function deepMerge(...objects) {
  const result = {};

  for (const source of objects) {
    if (source) {
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
            result[key] = deepMerge(result[key], source[key]);
          } else {
            result[key] = source[key];
          }
        }
      }
    }
  }

  return result;
}

module.exports = { deepMerge };