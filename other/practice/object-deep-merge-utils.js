/**
 * Recursively merges properties of one or more source objects into a target object.
 * Arrays are merged by concatenating them, not by overwriting.
 * Primitives are overwritten.
 *
 * @param {object} target The target object to merge into.
 * @param {...object} sources The source objects to merge from.
 * @returns {object} The merged target object.
 */
function deepMerge(target, ...sources) {
  if (target === null || typeof target !== 'object') {
    throw new TypeError('Target must be an object.');
  }

  const isObject = (obj) => obj && typeof obj === 'object' && !Array.isArray(obj);
  const isArray = (obj) => Array.isArray(obj);

  for (const source of sources) {
    if (source === null || typeof source !== 'object') {
      continue; // Skip non-object sources
    }

    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        const targetValue = target[key];
        const sourceValue = source[key];

        if (isObject(targetValue) && isObject(sourceValue)) {
          // Both are objects, deep merge
          target[key] = deepMerge(targetValue, sourceValue);
        } else if (isArray(targetValue) && isArray(sourceValue)) {
          // Both are arrays, concatenate them
          target[key] = targetValue.concat(sourceValue);
        } else if (isObject(sourceValue) && targetValue === undefined) {
          // Source is an object and target is undefined, assign directly
          target[key] = deepMerge({}, sourceValue); // Deep copy source object
        } else if (isArray(sourceValue) && targetValue === undefined) {
          // Source is an array and target is undefined, assign directly
          target[key] = [...sourceValue]; // Deep copy source array
        } else {
          // Primitives or different types, overwrite
          target[key] = sourceValue;
        }
      }
    }
  }
  return target;
}

export default deepMerge;
