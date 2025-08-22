/**
 * Assigns own and inherited enumerable string keyed properties of source objects to the destination object
 * for all destination properties that resolve to `undefined`.
 *
 * @param {Object} obj The destination object.
 * @param {...Object} sources The source objects.
 * @returns {Object} Returns `obj`.
 */
export const defaults = (obj, ...sources) => {
  sources.forEach(source => {
    if (source) {
      for (const key in source) {
        if (obj[key] === undefined) {
          obj[key] = source[key];
        }
      }
    }
  });
  return obj;
};

const isObject = (item) => item && typeof item === 'object' && !Array.isArray(item);

export const defaultsDeep = (obj, ...sources) => {
  sources.forEach(source => {
    if (source) {
      for (const key in source) {
        if (obj[key] === undefined) {
          obj[key] = source[key];
        } else if (isObject(obj[key]) && isObject(source[key])) {
          defaultsDeep(obj[key], source[key]);
        }
      }
    }
  });
  return obj;
};
