/**
 * Recursively merges two or more objects deeply. Properties in later objects
 * overwrite properties in earlier objects. Arrays are concatenated by default.
 *
 * @param {object} target The target object to merge into.
 * @param {...object} sources The source objects to merge.
 * @returns {object} The merged object.
 */
export function deepMergeRecursive(target, ...sources) {
  if (target === null || typeof target !== 'object') {
    target = {};
  }

  for (const source of sources) {
    if (source === null || typeof source !== 'object') {
      continue;
    }

    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        const targetValue = target[key];
        const sourceValue = source[key];

        if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
          target[key] = targetValue.concat(sourceValue);
        } else if (typeof targetValue === 'object' && targetValue !== null &&
                   typeof sourceValue === 'object' && sourceValue !== null &&
                   !Array.isArray(targetValue) && !Array.isArray(sourceValue)) {
          target[key] = deepMergeRecursive({ ...targetValue }, sourceValue);
        } else {
          target[key] = sourceValue;
        }
      }
    }
  }

  return target;
}
