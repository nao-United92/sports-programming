// src/other/object-utility-functions-advanced.js

/**
 * Deeply merges two or more objects.
 * Properties of later objects overwrite properties of earlier objects.
 * Arrays are overwritten, not merged.
 *
 * @param {Object} target The target object to merge into.
 * @param {...Object} sources The source objects to merge from.
 * @returns {Object} The deeply merged object.
 */
const mergeDeep = (target, ...sources) => {
  if (!target || typeof target !== 'object') {
    return target;
  }

  for (const source of sources) {
    if (source && typeof source === 'object') {
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key]) &&
              target[key] && typeof target[key] === 'object' && !Array.isArray(target[key])) {
            target[key] = mergeDeep(target[key], source[key]);
          } else {
            target[key] = source[key];
          }
        }
      }
    }
  }
  return target;
};

module.exports = {
  mergeDeep,
};
