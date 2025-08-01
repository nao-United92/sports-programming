/**
 * Recursively merges properties of one or more source objects into a target object.
 * Properties in later source objects overwrite properties in earlier ones.
 * @param {Object} target The target object to merge into.
 * @param {...Object} sources The source objects to merge from.
 * @returns {Object} The merged target object.
 */
export function deepMerge(target, ...sources) {
  if (target === null || typeof target !== 'object') {
    return target;
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
          // If both are objects (and not arrays), deep merge
          target[key] = deepMerge(Object.assign({}, target[key]), source[key]);
        } else if (Array.isArray(target[key]) && Array.isArray(source[key])) {
          // If both are arrays, concatenate them
          target[key] = target[key].concat(source[key]);
        } else {
          // Otherwise, overwrite
          target[key] = source[key];
        }
      }
    }
  }
  return target;
}

/**
 * Checks if an object is empty (has no enumerable own properties).
 * @param {Object} obj The object to check.
 * @returns {boolean} True if the object is empty, false otherwise.
 */
export function isEmptyObject(obj) {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    return false; // Not an object, is null, or is an array
  }
  return Object.keys(obj).length === 0;
}
