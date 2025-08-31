/**
 * This method is like `assign` except that it recursively merges own and inherited enumerable string keyed properties of source objects into the destination object.
 *
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @returns {Object} Returns `object`.
 */
export function merge(object, ...sources) {
  for (const source of sources) {
    if (source) {
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          if (typeof object[key] === 'object' && object[key] !== null && typeof source[key] === 'object' && source[key] !== null && !Array.isArray(object[key]) && !Array.isArray(source[key])) {
            merge(object[key], source[key]);
          } else {
            object[key] = source[key];
          }
        }
      }
    }
  }
  return object;
}
