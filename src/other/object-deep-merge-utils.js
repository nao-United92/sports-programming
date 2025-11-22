/**
 * Recursively merges properties of two or more objects.
 *
 * @param {Object} target The target object to merge into.
 * @param {...Object} sources The source objects to merge from.
 * @returns {Object} The merged object.
 */
export function deepMerge(target, ...sources) {
  if (!sources.length) {
    return target;
  }

  const isObject = (item) => item && typeof item === 'object' && !Array.isArray(item);

  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, { [key]: {} });
        }
        deepMerge(target[key], source[key]);
      } else if (Array.isArray(source[key])) {
        // For arrays, we replace the target array with the source array
        // or concatenate if target also has an array for the same key.
        if (Array.isArray(target[key])) {
          target[key] = [...target[key], ...source[key]];
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return deepMerge(target, ...sources);
}