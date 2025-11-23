/**
 * Recursively merges own enumerable string keyed properties of source objects
 * into the destination object. Source properties that resolve to `undefined`
 * are skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden.
 *
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @returns {Object} Returns `object`.
 */
export const merge = (object, ...sources) => {
  if (object == null || typeof object !== 'object') {
    return object;
  }

  for (const source of sources) {
    if (source != null && typeof source === 'object') {
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          if (Object.prototype.hasOwnProperty.call(object, key) &&
              typeof object[key] === 'object' && object[key] !== null &&
              typeof source[key] === 'object' && source[key] !== null &&
              !Array.isArray(object[key]) && !Array.isArray(source[key])) {
            // Both are objects, merge recursively
            merge(object[key], source[key]);
          } else if (Object.prototype.hasOwnProperty.call(object, key) &&
                     Array.isArray(object[key]) && Array.isArray(source[key])) {
            // Both are arrays, concatenate
            object[key] = object[key].concat(source[key]);
          } else {
            // Overwrite or set new property
            object[key] = source[key];
          }
        }
      }
    }
  }
  return object;
};