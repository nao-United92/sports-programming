/**
 * Deeply merges two or more objects into a new object.
 * Subsequent objects' properties will overwrite previous ones.
 *
 * @param {object} target The target object to merge into.
 * @param {...object} sources The source objects to merge from.
 * @returns {object} The new, deeply merged object.
 */
function deepMerge(target, ...sources) {
  const isObject = (item) => item && typeof item === 'object' && !Array.isArray(item);
  
  // Create a deep clone of the target to ensure non-mutation of the original
  let output = JSON.parse(JSON.stringify(target)); 

  if (!sources.length) {
    return output;
  }

  sources.forEach(source => {
    if (isObject(output) && isObject(source)) {
      for (const key in source) {
        if (isObject(source[key])) {
          if (!(key in output)) {
            Object.assign(output, { [key]: {} });
          }
          output[key] = deepMerge(output[key], source[key]); // Recursive call
        } else {
          Object.assign(output, { [key]: source[key] });
        }
      }
    } else if (source !== null && typeof source !== 'undefined') {
      // If output is not an object or source is not an object,
      // and source is not null/undefined, then output is replaced by source.
      // This handles cases like deepMerge(1, {a:2}) => {a:2} which might not be desired.
      // For this utility, we'll assume target is always an object or can be converted to one.
      // If source is not an object, it directly overwrites.
      output = source;
    }
  });

  return output;
}

module.exports = {
  deepMerge,
};
