/**
 * Deeply merges two or more objects into a new object.
 * Properties in later objects overwrite properties in earlier objects.
 * Arrays are overwritten, not merged.
 *
 * @param {object} target The target object to merge into. If not an object, a new empty object is used.
 * @param {...object} sources The source objects to merge.
 * @returns {object} A new object with merged properties.
 */
function deepMerge(target, ...sources) {
  if (target === null || typeof target !== 'object') {
    target = {};
  }

  for (const source of sources) {
    if (source === null || typeof source !== 'object') {
      continue;
    }

    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (Object.prototype.hasOwnProperty.call(target, key) &&
            typeof target[key] === 'object' && target[key] !== null &&
            typeof source[key] === 'object' && source[key] !== null &&
            !Array.isArray(target[key]) && !Array.isArray(source[key])) {
          target[key] = deepMerge(target[key], source[key]);
        } else {
          target[key] = source[key];
        }
      }
    }
  }

  return target;
}

module.exports = { deepMerge };
