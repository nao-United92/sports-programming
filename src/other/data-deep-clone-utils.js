
/**
 * Creates a deep clone of a value, handling primitives, arrays, and plain objects recursively.
 * It also handles Date and RegExp objects and attempts to prevent circular references.
 *
 * @param {*} value The value to deep clone.
 * @param {WeakMap} [hash=new WeakMap()] Internal parameter for handling circular references.
 * @returns {*} The deep cloned value.
 */
export const deepClone = (value, hash = new WeakMap()) => {
  // Handle primitives and null/undefined
  if (value === null || typeof value !== 'object') {
    return value;
  }

  // Handle Date objects
  if (value instanceof Date) {
    return new Date(value.getTime());
  }

  // Handle RegExp objects
  if (value instanceof RegExp) {
    return new RegExp(value.source, value.flags);
  }

  // Handle circular references
  if (hash.has(value)) {
    return hash.get(value);
  }

  let clone;
  if (Array.isArray(value)) {
    clone = [];
    hash.set(value, clone);
    value.forEach((item, index) => {
      clone[index] = deepClone(item, hash);
    });
  } else {
    // Assume plain object for other objects
    clone = {};
    hash.set(value, clone);
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        clone[key] = deepClone(value[key], hash);
      }
    }
  }

  return clone;
};
