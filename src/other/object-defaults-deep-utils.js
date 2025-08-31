/**
 * This method is like `defaults` except that it recursively assigns default properties.
 *
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @returns {Object} Returns `object`.
 */
export function defaultsDeep(object, ...sources) {
  for (const source of sources) {
    if (source) {
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          const value = object[key];
          if (value === undefined) {
            object[key] = source[key];
          } else if (typeof value === 'object' && value !== null && typeof source[key] === 'object' && source[key] !== null) {
            defaultsDeep(value, source[key]);
          }
        }
      }
    }
  }
  return object;
}
