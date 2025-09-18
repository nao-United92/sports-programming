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

/**
 * Performs a deep comparison between two objects, but only for keys that exist in both objects.
 * This function is useful for comparing partial objects or ensuring specific properties match.
 *
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 * @returns {boolean} True if the intersecting properties are deeply equal, false otherwise.
 */
export function deepEqualWithIntersection(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  for (const key of keys1) {
    if (keys2.includes(key)) {
      // Only compare if key exists in both objects
      if (!deepEqualWithIntersection(obj1[key], obj2[key])) {
        return false;
      }
    }
  }

  // Also check keys in obj2 that might not be in obj1 but are in the intersection
  for (const key of keys2) {
    if (keys1.includes(key)) {
      // This case is already covered by the first loop, but ensures symmetry
      // No need to re-compare, just ensure no extra keys in obj2 are missed if they were not in obj1
    } else {
      // If a key exists in obj2 but not in obj1, it's not part of the intersection for comparison
      // So we don't return false here, as we only care about the intersection
    }
  }

  return true;
}
