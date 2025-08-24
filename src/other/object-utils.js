/**
 * Deeply merges properties from a source object into a target object.
 * This function mutates the target object.
 * Arrays are replaced, not merged.
 *
 * @param {object} target The target object to merge into.
 * @param {object} source The source object to merge from.
 * @returns {object} The merged target object.
 */
export function deepMerge(target, source) {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key]) && typeof target[key] === 'object' && target[key] !== null && !Array.isArray(target[key])) {
        // If both are objects, deep merge
        target[key] = deepMerge(target[key] || {}, source[key]);
      } else {
        // Otherwise, replace the target property with the source property
        target[key] = source[key];
      }
    }
  }
  return target;
}